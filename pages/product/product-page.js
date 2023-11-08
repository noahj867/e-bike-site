import React from 'react';
import Link from 'next/link';
import style from 'styles/productPage.module.css';
import {ProductCard} from '../../components';

import {client} from '../../lib/client';
import {urlFor} from '../../lib/client';

const ProductPage = ({productCards}) => {



  // const count = 3;
  // const accessories = productCard

  const bike = productCards.find(bike => bike.name === "24hr Battery Bike");
  const accessories = productCards.filter(accessory => 
    accessory.name !== "24hr Battery Bike" &&
    accessory.name !== "Classic Pass" &&
    accessory.name !== "Mover Pass"
  )

  return (
    <div id="product-page">
      <div className={style.productPageBanner}>
        <h1 className={style.productPageTitle}>Start Riding Today</h1>
        <h4 className={style.productPageSubtitle}>Bikes, accessories and more</h4>  
      </div>    
      {/* <hr className={style.linebreak}></hr> */}
      <div className={style.productPageContainer}>
        <div className={style.bikeContainer}>
          <div className={style.bikeTitle}></div>
          <ProductCard productCard={bike}/>
        </div>
        {accessories?.map((accessory) => <ProductCard key={accessory._id} productCard={accessory}/>)}
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