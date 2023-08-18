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
      <div>
        <Link href={"/product/product-page"}>
          <button className={style.primaryButton}type='button'>{buttonText}</button>
        </Link>
        <Link href={"/#passes"}>
          <button className={style.secondaryButton}type='button'>Purchase Pass</button>
        </Link>
      </div>
    </div>

  )
}

export default FooterBanner