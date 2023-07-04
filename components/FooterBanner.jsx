import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import style from 'styles/footerBanner.module.css'

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
  return (
    <div className={style.footerBannerContainer}>
      <h2 className={style.bannerHeader}>The Future of Delivery is here
      </h2>
      <p className={style.bannerSubtitle}>No time to lose</p>
      <Link href={`/product/${product}`}>
      <button className={style.primaryButton}type='button'>{buttonText}</button>
      <button className={style.secondaryButton}type='button'>Purchase Pass</button>
      </Link>
      {/* <img src={urlFor(image)} className={style.footerBannerImage}/> */}
      </div>
  )
}

export default FooterBanner