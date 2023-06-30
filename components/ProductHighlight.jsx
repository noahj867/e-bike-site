import React from 'react'
import { urlFor } from '@/lib/client'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Speed from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const ProductHighlight = ({heroBanner}) => {
  const productHighlightImages = [BatteryChargingFullIcon, Speed, HandshakeIcon, HealthAndSafetyIcon];
  const productHighlightDescs = [
    { title: 'Power', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, reprehenderit? Possimus, molestiae laboriosam tempora quae temporibus at ad perferendis'},
    { title: 'Speed', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et voluptates, cupiditate quibusdam eos explicabo.'},
    { title: 'Convenience', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates eius obcaecati blanditiis odit dignissimos illo saepe, inventore esse ullam, ex itaque accusamus accusantium cumque, odio quis. Cumque, reiciendis enim.'},
    { title: 'Safety', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates eius obcaecati blanditiis odit dignissimos illo saepe, inventore esse ullam, ex itaque accusamus accusantium cumque, odio quis. Cumque, reiciendis enim.'
  }]

  return (
    <div className='product-highlight-container'>
        <img
            className='product-highlight-image'
            src={urlFor(heroBanner.image)} 
            alt="bike machine"/>
        <div className='product-highlight-details'>
            {productHighlightDescs.map((item, index) => (
                <div className='product-highlight-row' key={index}>
                  <div className="product-highlight-icon-container">
                    <h2 className="product-highlight-icon">
                      {React.createElement(productHighlightImages[index], {fontSize: 'large'})}
                    </h2>
                  </div>
                  <div className='product-highlight-desc'>
                    <h2 className='product-highlight-title'>
                      {item.title}
                    </h2>
                    <div className='product-highlight-body'>
                      {item.body}
                    </div>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductHighlight