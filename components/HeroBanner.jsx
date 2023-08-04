import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={style.heroBannerContainer}>
        <div className={style.heroBannerText}>
            <h1>Swap & GO</h1>
            <p className={style.heroBannerSubtitle}>The Fast and Affordable Future of E-bike Delivery</p>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">Buy Bike</button>
                    <button class={style.buttonSecondary} type="button">Purchase Pass</button>
                </Link>
            </div>
        </div>
        
        <div className={style.motorcycleGifWrapper}>
          <img src={"/motorcycle-gif.gif"} alt="my cool gif" className={style.motorcycleGif}/>
        </div>
        {/* <img src={urlFor(heroBanner.image)} 
        alt="headphones" 
        className={style.heroBannerImage}/> */}
    </div>
  )
}

export default HeroBanner