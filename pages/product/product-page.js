import React from 'react';
import Link from 'next/link';
import style from 'styles/productPage.module.css';
import {ProductCard} from '../../components';

import {client} from '../../lib/client';
import {urlFor} from '../../lib/client';

const ProductPage = ({productCards}) => {

  return (
    <>
    <hr className={style.linebreak}></hr>
      <div className={style.productPageBanner}>
        <h1 className={style.productPageTitle}>Everything you need to start riding</h1>
        <h4 className={style.productPageSubtitle}>Bikes, accessories and more</h4>  
      </div>    
      <div className={style.productPageContainer}>
        {productCards?.map((productCard) => <ProductCard key={productCard._id} productCard={productCard}/>)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
    const productQuery = '*[_type == "productPage"]';
    const productCards = await client.fetch(productQuery);
  
    return {
      props: {productCards}
    }
  }

export default ProductPage