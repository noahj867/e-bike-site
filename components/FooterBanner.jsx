import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import style from 'styles/footerBanner.module.css'

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
  return (
    <div className={style.footerBannerContainer}>
      <div className={style.bannerDesc}>
        <div className={style.left}>
          <p>{discount} off</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className={style.right}>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
          <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img 
            src={urlFor(image)} className={style.footerBannerImage}
        />
      </div>
    </div>
  )
}

export default FooterBanner