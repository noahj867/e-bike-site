import React from 'react';
import { urlFor } from '@/lib/client';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Speed from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import style from 'styles/productHighlight.module.css';

const ProductHighlight = ({heroBanner}) => {
  const productHighlightImages = [BatteryChargingFullIcon, Speed, HandshakeIcon, HealthAndSafetyIcon];
  // const productHighlightColors = ['black', 'black', 'black', 'black'];
  const productHighlightDescs = [
    { title: 'Power', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, reprehenderit? Possimus, molestiae laboriosam tempora quae temporibus at ad perferendis'},
    { title: 'Speed', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et voluptates, cupiditate quibusdam eos explicabo.'},
    { title: 'Convenience', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates eius obcaecati blanditiis odit dignissimos illo saepe, inventore esse ullam, ex itaque accusamus accusantium cumque, odio quis. Cumque, reiciendis enim.'},
    { title: 'Safety', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates eius obcaecati blanditiis odit dignissimos illo saepe, inventore esse ullam, ex itaque accusamus accusantium cumque, odio quis. Cumque, reiciendis enim.'
  }]

  return (
    <>
    <h1 className={style.productHighlightTitle}>Why 24 Hr Battery?</h1>
    <div className={style.underline}></div>
    <div className={style.productHighlightContainer}>
        <div className={style.productHighlightDetails}>
            {productHighlightDescs.map((item, index) => (
             <div className={style.animation} key={index}>
                <div className={style.productHighlightRow}>
                  <div className={style.productHighlightIconContainer}>
                    <h2 className={style.productHighlightIcon}>
                      {React.createElement(productHighlightImages[index], {fontSize: 'large',})}
                    </h2>
                  </div>
                  <div className={style.productHighlightDesc}>
                    <h2>
                      {item.title}
                    </h2>
                    <div>
                      {item.body}
                    </div>
                  </div>
                  </div>
                </div>
            ))}
        </div>
        <img
            className={style.productHighlightImage}
            src={urlFor(heroBanner.image)} 
            alt="bike machine"/>
    </div>
    </>
  )
}

export default ProductHighlight