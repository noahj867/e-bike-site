import React from 'react'
import Link from 'next/link'

import {urlFor} from "../lib/client"

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <h3>Boundless Potential</h3>
            <p className='beats-solo'>Bikes that can go as far you go</p>
            {/* <h1>{heroBanner.largeText1}</h1> */}
            <img src={urlFor(heroBanner.image)} 
            alt="headphones" 
            className="hero-banner-image"/>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button class="button-primary" type="button">Buy Bike</button>
                    <button class="button-secondary" type="button">Purchase Pass</button>

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