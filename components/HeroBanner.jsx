import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';
import Image from 'next/image';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={style.heroBannerContainer}>
        <div className={style.heroBannerText}>
            <h1>Swap & GO</h1>
            <p className={style.heroBannerSubtitle}>Premium e-bikes and battery swaps at your fingertips</p>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">View Products</button>
                    <button class={style.buttonSecondary} type="button">Purchase Pass</button>
                </Link>
            </div>
        </div>
        <div className={style.motorcycleGifWrapper}>
          <Image 
          src={"/motorcycle-gif-big.gif"} 
          alt="my cool gif" 
          width={1700}
          height={956}
          className={style.motorcycleGif}/>
        </div>
    </div>
  )
}

export default HeroBanner