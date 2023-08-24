import React from 'react'
import style from '/styles/aboutUs.module.css'
import Image from 'next/image'

const AboutUs = () => {
  return (
      <div id="aboutus" className={style.sectionContainer}>
          <div className={style.contentContainer}>
              <h1 className={style.title}>About Us</h1>
              <div className={style.seperator}></div>
              <h3 className={style.subtitle}>We&apos;re on a mission to make e-bike delivery <em>affordable</em>, <em>safe</em>, and <em>hassle-free</em> </h3>
              <p className={style.body}> We started 24 Hour Battery to provide a safe and affortdable alternative for e-bike couriers.</p>
          </div>
          <div className={style.imageWrapper}>
              <Image 
                src="/about-us-girl.jpg" 
                alt="about us photo" 
                width={700}
                height={1176}
            />
          </div>
      </div>
  )
}

export default AboutUs