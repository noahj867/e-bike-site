import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';
import Image from 'next/image';
import {FadeIn} from '../components';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={style.heroBannerContainer}>
      {/* <FadeIn> */}
        <div className={style.heroBannerText}>
            <h1>Swap & Go</h1>
            <h3 className={style.heroBannerSubtitle}> Wave dead batteries goodbye.<br/></h3>
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
        </div>
      {/* </FadeIn> */}
    </div>
  )
}

export default HeroBanner