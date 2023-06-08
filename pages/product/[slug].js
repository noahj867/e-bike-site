import React, {useState} from 'react';

import {client, urlFor} from '../../lib/client';
import {AiOutlineMinus, AiOutplinePlus, AiFillStar, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai';


const ProductDetails = ({product, products}) => {
    const {image, name, details, price } = product;
    const [index, setIndex] = useState(0)

  return (
    <div>
        <div className="product-detail-container">
            <div className="image-container">
                <img 
                src={urlFor(image && image[index])}
                className='product-detail-image' />
                <div className="small-images-container">
                {image?.map((item, i) => (
                    <img 
                        src={urlFor(item)}
                        className={i === index ?'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                    />
                ))}
                </div>
            </div>
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <h4>Details:</h4>
                <p>{details}</p>
                <p className="price">${price}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className="minus" onClick=''><AiOutlineMinus/></span>
                        <span className="num" onclick=''>0</span>
                        <span className="plus" onClick=''><AiOutlinePlus/></span>
                    </p>
                </div>
                <div className="buttons">
                    <button 
                    type='button' 
                    className='add-to-cart'
                    onClick=''>Add to Cart
                    </button>
                    <button
                    className='buy-now' 
                    onClick=''>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export const getStaticProps = async ({params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);   
  
    return {
      props: {products, product}
    }
  }

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths, 
        fallback: 'blocking'
    }
}



export default ProductDetails