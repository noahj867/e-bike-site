import React from 'react'
import style from 'styles/howItWorks.module.css'

const HowItWorks = () => {
  return (
    <>
    <div className={style.howItWorksContainer}>
      <h1 className={style.howItWorksTitle}>How It Works</h1>
      <img src={"/how-it-works.png"} alt="how it works" className={style.howItWorksImage} />
    </div>
    </>
  )
}

export default HowItWorks