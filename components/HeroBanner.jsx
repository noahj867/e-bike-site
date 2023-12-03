import React, {useState} from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';
import Image from 'next/image';
import {FadeIn, Overlay, Form} from '../components';
import { useStateContext } from '../context/StateContext';

const HeroBanner = () => {

  const {showOverlay, handleOverlayToggle} = useStateContext();


  return (
    <div className={style.heroBannerContainer}>
      {showOverlay && (
        <Overlay >
          <Form toggleOverlay={handleOverlayToggle} showOverlay={showOverlay}/>
        </Overlay>
      )}
        <div className={style.heroBannerText}>
            <h1>Swap & Go</h1>
            <h3 className={style.heroBannerSubtitle}> Wave dead batteries goodbye.<br/></h3>
              <div>
                <Link href="/product/explorer">
                    <button type="button">24HB Bike</button>
                </Link>
                <button class={style.buttonSecondary} type="button" onClick={handleOverlayToggle}>Join Waitlist</button>
            </div>
        </div>
        <div className={style.motorcycleGifWrapper}>
        </div>
    </div>
  )
}

export default HeroBanner