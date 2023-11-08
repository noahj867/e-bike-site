import React from 'react';
import style from 'styles/layout.module.css';
// import Fade from 'react-reveal/fade';

import {Product, FooterBanner, HeroBanner, HowItWorks, ProductHighlight, News, AboutUs, FadeInWrapper, Form}
from '../components';

import {client} from '../lib/client';

const Index = ({products, bannerData}) => {

  const count = 3;
  const productCards = products.slice(0, count)

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <ProductHighlight heroBanner={bannerData.length && bannerData[0]}/>
      <HowItWorks/>
      <AboutUs/>
      <Form/>
    {/* <div className={style.productSection}>
      <div id="passes" className={style.productsHeading}>
        <h2>Our Pass Packages</h2>
        <p>Best deals on the market</p>
      </div>
      <div className={style.productsContainer}>
        {productCards.map((product) => <Product key={product._id} product={product}/>)}
      </div>
    </div> */}
    <News />
    <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>

    </>
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"] | order(order asc)`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "productPage"]';
  const productPage = await client.fetch(productQuery);

  return {
    props: {products, bannerData}
  }
}

export default Index