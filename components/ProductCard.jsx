import React from 'react';
import Link from 'next/link';
import style from 'styles/productCard.module.css';

import {urlFor} from '../lib/client';

const ProductPage = ({productCard}) => {

const {image, name, slug, price} = productCard;

  return (
    <div className={style.productContainer}>
        <Link href={`/product/${slug.current}`}>
            <div className={style.productContentContainer}>
                <img className={style.productImage} src={urlFor(image && image[0])}/>
                <h4 className={style.productTitle}>{name}</h4>
                <p className={style.productPrice}><em><b>Price:</b> ${price}</em></p>
                <button className={style.addToCart}>Add to Cart</button>
            </div>
        </Link>
    </div>
  )
}

export default ProductPage