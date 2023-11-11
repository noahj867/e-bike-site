import React, { useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import style from 'styles/fadeIn.module.css';


const FadeIn = (props) => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // Trigger only once when the element becomes visible
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current); // Stop observing after visible
          }
        });
      });

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      // Clean up observer on unmount
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

      return (
      <div className={`${props.className} ${style.fadeIn} ${isVisible ? style.isVisible : ""}`} ref={ref}>
      {props.children} 
      </div>
    );
  } 

  export default FadeIn