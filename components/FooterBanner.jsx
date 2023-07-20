import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import style from 'styles/footerBanner.module.css'

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
  return (
    <div className={style.footerBannerContainer}>
      <h1 className={style.bannerHeader}>The Future of Delivery is here
      </h1>
      <p className={style.bannerSubtitle}>Ride with us</p>
      <Link href={`/product/${product}`}>
      <button className={style.primaryButton}type='button'>{buttonText}</button>
      <button className={style.secondaryButton}type='button'>Purchase Pass</button>
      </Link>
    </div>

  )
}

export default FooterBanner