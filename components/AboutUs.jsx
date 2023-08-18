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
              <p className={style.body}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi numquam distinctio quisquam consectetur dolore. Laudantium qui, molestiae corporis nulla alias vitae obcaecati dicta error itaque facere, magnam culpa nisi deleniti consequuntur! Harum neque, optio ratione architecto natus atque magnam corrupti tenetur, numquam consequatur facilis praesentium, consectetur ad quidem animi similique aut veritatis obcaecati modi autem ab. Doloribus ullam sit autem voluptates labore quo maxime?</p>
          </div>
          <div className={style.imageWrapper}>
              <Image 
                src="/about-us-girl.jpg" 
                alt="about us photo" 
                width={600}
                height={840}
            />
          </div>
      </div>
  )
}

export default AboutUs