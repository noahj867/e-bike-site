import React from 'react';
import Link from 'next/link';
import style from 'styles/product.module.css';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import {urlFor} from '../lib/client'


const Product = ({product}) => {

  const {image, name, slug, price_display, subtitle, highlight1, highlight2, highlight3, highlight4} = product 
  const highlights = [highlight1, highlight2, highlight3, highlight4];

  return (
    <>
    <a href="product-card">
      <div className={`${style.productCardContainer} ${name === 'Classic' ? style.productSpecial : '' }`}>
        <Link href={`/product/${slug.current}`}>
          <div className={style.productBanner}>
            <h2 className={style.productName}>{name}</h2>
            <p className={style.productSubtitle}>{subtitle}</p>
            <h2 className={style.productPrice}>{price_display}</h2>
          </div>
          <div className={style.productDetailContainer}>
           <img
              src={urlFor(image && image[0])}
              width={200}
              height={200}
              className={style.productImage}
              />
            <div className={style.productHighlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={style.highlightRow}>
                  <BeenhereIcon style={{color: '#8da8bf'}}/>
                  <div className={style.productBullet}>{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </a>
    </>
  )
}

export default Product
