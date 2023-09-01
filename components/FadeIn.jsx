import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import style from 'styles/fadeIn.module.css';


const FadeIn = (props) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
  
      return (
      
      <div className={`${props.className} ${style.fadeIn} ${isVisible ? style.isVisible : ""}`} 
    ref={domRef}>
    {props.children} 
    </div>
    );
  } 

  export default FadeIn