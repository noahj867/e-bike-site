import { sizeHeight } from '@mui/system'
import React from 'react'
import style from 'styles/howItWorks.module.css'
import Image from 'next/image'
import {FadeIn} from '../components';


const HowItWorks = () => {
  const images = [ "/hiw-motorcycle.jpeg", "/hiw-motorcycle-1.jpeg", "/hiw-motorcycle-2.jpeg"]
  // const images = [ "/download.jpg", "/download-1.jpg", "/download-2.jpg"]
  const numberColors = ["#36523D", "#82a98a", "#36523D"]
  const descriptions = [
    { title: "Power Your Ride", step: "Step 1", body: "Subscribe: once you have purchased our e-bike the first thing is to get your subscription to our unlimited supply of batteries. Simply download our app, create your account and subscribe to our service."}, 
    // If you're someone who travels outside the city often or wants full battery autonomy, buying a battery might be for you. For full-time or part-time couriers looking to save time, money, and headaches we recommend the pass.
    { title: "Swap Fast", step: "Step 2", body: "Scan QR Code: Next, go to any of our charging stations placed around New York city, scan the QR code on the screen using our app and a freshly charged battery will emerge from the station in seconds! "},
    { title: "Find Your Potential", step: "Step 3", body: "Swap & Go: Now you can easily recharge your ride in 30 seconds by simply scanning the QR code on any of our charging stations, returning your depleted battery and a new fully charged battery will emerge. No wait, no downtime, and no fires. Welcome to 24hourbattery."} 
  ]
  return (
    <>
    <FadeIn>
      <div id="howitworks"className={style.howItWorksContainer}>
      <h1 className={style.howItWorksTitle}>How It Works</h1>
      {/* <h3 className={style.subtitle}>A simple three-step process</h3> */}
          <div className={style.stepContainer}>
            {descriptions.map((item, i) => (
              <div className={`${style.stepImageText} ${style[`block${i}`]}`} key={i}>
                <div className={style.stepImageContainer}>
                  <Image 
                    className={style.stepImage} 
                    src={images[i]}
                    alt="how it works image"
                    width={800}
                    height={533}
                  />
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
      </FadeIn>
    </>
  )
}

export default HowItWorks