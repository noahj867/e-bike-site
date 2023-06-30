import React from 'react';
import Link from 'next/link';
import style from 'styles/product.module.css';

import {urlFor} from '../lib/client'

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <div className={style.productCardContainer}>
      <Link href={`/product/${slug.current}`}>
        <div className={style.productCard}>
          <img 
            src={urlFor(image && image[0])}
            width={320}
            height={400} 
            className={style.productImage}
            />
            <p className={style.productName}>{name}</p>
            <p className={style.productPrice}>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
