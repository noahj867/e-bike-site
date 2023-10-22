import React from 'react';
import { urlFor } from '@/lib/client';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Speed from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SellIcon from '@mui/icons-material/Sell';
import style from 'styles/productHighlight.module.css';
import {FadeIn} from '../components';


const ProductHighlight = ({heroBanner}) => {
  const productHighlightImages = [HandshakeIcon, SellIcon, Speed, HealthAndSafetyIcon];
  // const productHighlightColors = ['#284b63', '#284b63', '#536f82', '#536f82'];
  const productHighlightDescs = [
    { title: 'Convenience', body: "Swap out your battery in < 30 seconds at one of our battery swapping stations."},
    { title: 'Affordability', body: "Save up to $500/month with a 24 hr battery pass or hundreds on a premium e-bike."},
    { title: "Power", body: "Go further, faster with up to 150km range and 90km/hr top speed."},
    { title: 'Safety', body: "Our machines are equipped with state-of-the-art temperature control, making them among the safest places to charge a lithium-ion battery. Period."
  }]

  return (
    <>
    <FadeIn>
    <div className={style.wrapper}>
      <h2 className={style.sectionTitle}>Why 24 Hour Battery?</h2>
      <div className={style.productHighlightContainer}>
          <div className={style.productHighlightDetails}>
              {productHighlightDescs.map((item, index) => (
              <div className={style.animation} key={index}>
                  <div className={style.productHighlightRow}>
                    <div className={style.productHighlightIconContainer}>
                      <h2 className={style.productHighlightIcon}>
                        {React.createElement(productHighlightImages[index], {fontSize: 'large' })}
                      </h2>
                    </div>
                    <div className={style.productHighlightDesc}>
                      <h3 className={style.productHighlightTitle}>
                        {item.title}
                      </h3>
                      <p>
                        {item.body}
                      </p>
                    </div>
                    </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
    </FadeIn>
    </>
  )
}

export default ProductHighlight