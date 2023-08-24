import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';
import Image from 'next/image';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={style.heroBannerContainer}>
        <div className={style.heroBannerText}>
            <h1>Swap & Go</h1>
            <h3 className={style.heroBannerSubtitle}> Wave dead batteries goodbye<br/></h3>
            <div>
                <Link href="/product/product-page">
                    <button type="button">View Products</button>
                </Link>
                <Link href="/#passes">
                <button class={style.buttonSecondary} type="button">Purchase Pass</button>
                </Link>
            </div>
        </div>
        <div className={style.motorcycleGifWrapper}>
          {/* <Image 
          src={"/motorcycle-gif-big.gif"} 
          alt="my cool gif" 
          width={1700}
          height={956}
          className={style.motorcycleGif}/> */}
        </div>
    </div>
  )
}

export default HeroBanner