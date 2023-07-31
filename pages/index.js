import React from 'react';
import style from 'styles/layout.module.css';
// import Fade from 'react-reveal/fade';

import {Product, FooterBanner, HeroBanner, HowItWorks, ProductHighlight, News, Location}
from '../components';

import {client} from '../lib/client';

const Index = ({products, bannerData}) => {
  return (
    <>
      {/* <Location /> */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <ProductHighlight heroBanner={bannerData.length && bannerData[0]}/>
      <HowItWorks/>
    <div className={style.productSection}>
      <div className={style.productsHeading}>
        <h2>Premium Products</h2>
        <p>Best deals on the market</p>
      </div>
      <div className={style.productsContainer}>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
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