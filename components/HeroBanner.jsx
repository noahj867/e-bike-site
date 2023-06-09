import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client";
import style from 'styles/heroBanner.module.css';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={style.heroBannerContainer}>
        <div>
            <h3>Boundless Potential</h3>
            <p className={style.beatsSolo}>Bikes that can go as far you go</p>
            {/* <h1>{heroBanner.largeText1}</h1> */}
            <img src={urlFor(heroBanner.image)} 
            alt="headphones" 
            className={style.heroBannerImage}/>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">Buy Bike</button>
                    <button class={style.buttonSecondary} type="button">Purchase Pass</button>

                </Link>
                {/* <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default HeroBanner