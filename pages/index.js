import React from 'react';
import style from 'styles/layout.module.css';

import {Product, FooterBanner, HeroBanner, HowItWorks, ProductHighlight, News}
from '../components';

import {client} from '../lib/client';

const Index = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <ProductHighlight heroBanner={bannerData.length && bannerData[0]}/>
      <HowItWorks/>
    <div className={style.productsHeading}>
      <h2>E-bike Products</h2>
      <p>This stuff will blow your mind</p>
    </div>
    <div className={style.productsContainer}>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    <News />

    <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>
    </>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Index