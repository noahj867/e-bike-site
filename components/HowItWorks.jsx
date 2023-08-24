import { sizeHeight } from '@mui/system'
import React from 'react'
import style from 'styles/howItWorks.module.css'
import Image from 'next/image'

const HowItWorks = () => {
  const images = [ "/how-it-works-1.jpg", "/how-it-works-2.jpg", "/how-it-works-3.jpg"]
  const numberColors = ["#36523D", "#82a98a", "#36523D"]
  const descriptions = [
    { title: "Power Your Ride", step: "Step 1", body: "When you decide to purchase one of our e-bikes, there are two battery options to choose from: buy a battery outright or buy a 24 Hr Battery Pass."}, 
    // If you're someone who travels outside the city often or wants full battery autonomy, buying a battery might be for you. For full-time or part-time couriers looking to save time, money, and headaches we recommend the pass.
    { title: "Swap Fast", step: "Step 2", body: "Buying a pass gives you access to our 24/7 battery swapping network with machines conveniently placed all across the city. Whenever you're running low on battery, ride to the nearest station and swap your battery out with one in the machine. It takes < 30 seconds. No more pricy utility bills, charging times, upfront costs, and fire hazards. Just swap & go."},
    { title: "Unleash Your Potential", step: "Step 3", body: "Whichever option you choose, you can rest easy knowing our bikes and batteries our safe and built to last. They're 100% fire safety approved and with 150km ranges and up to 90km/hr top speeds, they'll get you to where you need to go, fast."} 
  ]
  return (
    <>
    <div className={style.howItWorksContainer}>
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
    </>
  )
}

export default HowItWorks