import React from 'react'
import style from '/styles/aboutUs.module.css'
import Image from 'next/image'
import {FadeIn} from '../components';

const AboutUs = () => {
  return (
      <div id="aboutus" className={style.sectionContainer}>
        <FadeIn className={style.fadeIn}>
          <div className={style.contentContainer}>
              <h1 className={style.title}>About Us</h1>
              <div className={style.seperator}></div>
              <h3 className={style.subtitle}>We are on a mission to provide the most safe, affordable and convenient e-bike in america. </h3>
              <p className={style.body}> 
              24hourbattery is a company that gives the public the opportunity to purchase an electric bike with the ability to swap&go. This is possible because of our charging cabinets that store, charge, and swap depleted  batteries for  fully charged ones in seconds. 24hourbattery is the energy that knows no bounds. Our company  was created due to the unbeknown need for the service we provide and the practicality of our products. 
              <br/><br/>Our charging stations are conveniently placed around nyc for easy access 24 hours a day. Every one of our stations  are programmed with fire proof protocols that prevent fires from spreading in the event of a fire happening. These cabinets also have fans inside programmed to keep the batteries at the perfect temperature for charging, making our machines the ideal controlled space for charging lithium ion batteries.  
              <br/><br/>In New York alone thirteen lives have been claimed due to lithium ion battery fires in 2023 . These fires are caused by faulty batteries being overcharged too many times. One fire in particular that took place in a Manhattan bike shop was caused by too many bike batteries being charged in an uncontrolled space at once. Those e-bike batteries were being charged like that because of delivery drivers&apos; desperate need for a place to store, swap and charge  their batteries to stay on the road for longer and the lack of knowledge or caring on the shop owner&apos;s part . Which brings us to the main cause of these fires, the desperate need for a safe, affordable and convenient way to swap&go. 
</p>
          </div>
          <div className={style.imageWrapper}>
              <Image 
                src="/about-us-girl.jpg" 
                alt="about us photo" 
                width={700}
                height={1176}
            />
          </div>
        </FadeIn>
      </div>
  )
}

export default AboutUs