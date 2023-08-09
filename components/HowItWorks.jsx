import { sizeHeight } from '@mui/system'
import React from 'react'
import style from 'styles/howItWorks.module.css'

const HowItWorks = () => {
  const images = [ "/how-it-works-1.png", "/how-it-works-2.png", "/how-it-works-3.png"]
  const numberColors = ["#36523D", "#82a98a", "#36523D"]
  const descriptions = [
    { title: "Ride Far", step: "Step 1", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium a assumenda aliquam fuga molestias. Rerum fugit aliquid magnam dignissimos, delectus qui? Facilis, labore! Nisi voluptates earum cumque et ducimus quas!"}, 
    { title: "Swap Fast", step: "Step 2", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"},
    { title: "Go Anywhere", step: "Step 3", body: "Lorem ipsum dolor sit amet"} 
  ]
  return (
    <>
    <div className={style.howItWorksContainer}>
    <h1 className={style.howItWorksTitle}>How It Works</h1>
    <h3 className={style.subtitle}>A simple three-step process</h3>
        <div className={style.stepContainer}>
          {descriptions.map((item, i) => (
            <div className={`${style.stepImageText} ${style[`block${i}`]}`} key={i}>
              <div className={style.stepImageContainer}>
                <img className={style.stepImage} src={images[i]}/>
              </div>
              <div className={style.stepText}>
                <div className={style.stepTextContainer}>
                  <h3 className={style.stepTitle}>{item.title}
                  </h3>
                  <p className={style.stepBody}>{item.body}
                  </p>
                </div>
              </div>
            </div>
              ))}
        </div>
      </div>
    </>
  )
}

export default HowItWorks