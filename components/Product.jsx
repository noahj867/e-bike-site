import React from 'react';
import Link from 'next/link';
import style from 'styles/product.module.css';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import {urlFor} from '../lib/client'


const Product = ({product}) => {

  const {image, name, slug, price_display, subtitle, highlight1, highlight2, highlight3} = product 
  const highlights = [highlight1, highlight2, highlight3];
 

  return (
    <div className={`${style.productCardContainer} ${name === 'Power' ? style.productSpecial : '' }`}>
      <Link href={`/product/${slug.current}`}>
        <div className={style.productBanner}>
          <h1 className={style.productName}>{name}</h1>
          <p className={style.productSubtitle}>{subtitle}</p>
          <p className={style.productPrice}>{price_display}</p>
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
                <BeenhereIcon style={{color: 'blue'}}/>
                <div>{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
