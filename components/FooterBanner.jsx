import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import style from 'styles/footerBanner.module.css'
import { useStateContext } from '../context/StateContext';
// import {FadeIn} from '../components';



const FooterBanner = () => {

  const {handleOverlayToggle} = useStateContext();

  return (
    <div className={style.footerBannerContainer}>
        <h1 className={style.bannerHeader}>The Future of Delivery is here
        </h1>
        <p className={style.bannerSubtitle}>Ride with us</p>
        <div>
          <Link href={"/product/product-page"}>
            <button className={style.primaryButton}type='button'>Shop Now</button>
          </Link>
            <button className={style.secondaryButton}type='button' onClick={handleOverlayToggle}>Join Waitlist</button>
        </div>

    </div>

  )
}

export default FooterBanner