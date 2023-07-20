import { sizeHeight } from '@mui/system'
import React from 'react'
import style from 'styles/howItWorks.module.css'

const HowItWorks = () => {
  const numbers = [ "1", "2", "3"]
  const numberColors = ["#36523D", "#82a98a", "#36523D"]
  const descriptions = [
    { title: "Ride", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga"}, 
    { title: "Recharge", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"},
    { title: "Repeat", body: "Lorem ipsum dolor sit amet"}, 
  ]
  return (
    <>
    <div className={style.howItWorksContainer}>
    <h1 className={style.howItWorksTitle}>How It Works</h1>
    <h3 className={style.subtitle}>A simple three-step process</h3>
    {/* <div className={style.stepAnimation}>asd
    </div>
    <div className={style.moveHorizontal}></div>
    <div className={style.moveHorizontalReverse}></div> */}
      <div className={style.stepContainer}>
        <div className={style.stepNumber}>
          <div className={style.stepCircle}>1</div>
          <div className={style.horizontalDottedLine}></div>
          <div className={style.stepCircle}>2</div>
          <div className={style.horizontalDottedLine}></div>
          <div className={style.stepCircle}>3</div>
        </div>
        <div className={style.stepText}>
          {descriptions.map((item, i) => (
          <div className={style.step} key={i}>
            <div className={style.verticalLine}></div>
            <div className={style.stepTextContainer}>
              <h3 className={style.stepTitle}>{item.title}
              </h3>
              <p className={style.stepBody}>{item.body}
              </p>
            </div>
          </div>
              ))}
        </div>
      </div>
  </div>
    </>
  )
}

export default HowItWorks