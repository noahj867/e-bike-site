import React, {useState} from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';
import Image from 'next/image';
import {FadeIn, Overlay, Form} from '../components';
import {form} from '../components';

const HeroBanner = ({heroBanner}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayToggle = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className={style.heroBannerContainer}>
      {showOverlay && (
        <Overlay toggleOverlay={handleOverlayToggle}>
          <Form />
        </Overlay>
      )}
      {/* <FadeIn> */}
        <div className={style.heroBannerText}>
            <h1>Swap & Go</h1>
            <h3 className={style.heroBannerSubtitle}> Wave dead batteries goodbye.<br/></h3>
              <div>
                <Link href="/product/product-page">
                    <button type="button">View Products</button>
                </Link>
                <button class={style.buttonSecondary} type="button" onClick={handleOverlayToggle}>Join Waitlist</button>
            </div>
        </div>
        <div className={style.motorcycleGifWrapper}>
        </div>
      {/* </FadeIn> */}
    </div>
  )
}

export default HeroBanner