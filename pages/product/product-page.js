import React from 'react';
import Link from 'next/link';
import style from 'styles/productPage.module.css';
import {ProductCard} from '../../components';

import {client} from '../../lib/client';
import {urlFor} from '../../lib/client';

const ProductPage = ({productCards}) => {

  return (
    <div id="product-page">
      <div className={style.productPageBanner}>
        <h1 className={style.productPageTitle}>Start Riding Today</h1>
        <h4 className={style.productPageSubtitle}>Bikes, accessories and more</h4>  
      </div>    
      {/* <hr className={style.linebreak}></hr> */}
      <div className={style.productPageContainer}>
        {productCards?.map((productCard) => <ProductCard key={productCard._id} productCard={productCard}/>)}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const productQuery = `*[_type == "product"] | order(order asc)`;
    const productCards = await client.fetch(productQuery);
  
    return {
      props: {productCards}
    }
  }

export default ProductPage