import React, {useState} from 'react';

import {client, urlFor} from '../../lib/client';
import {AiOutlineMinus, AiOutplinePlus, 
AiFillStar, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import style from 'styles/slug.module.css';
import {Form, Overlay} from '../../components';


const ProductDetails = ({product, products}) => {
    const {image, name, description, price, subtitle, highlight1, highlight2, highlight3, highlight4 } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, showOverlay, handleOverlayToggle} = useStateContext();

    console.log("Before toggle:", showOverlay);
    console.log("After toggle:", showOverlay);
    
  return (
        <div className={style.productDetailContainer}>
                  {showOverlay && (
        <Overlay >
          <Form toggleOverlay={handleOverlayToggle} showOverlay={showOverlay}/>
        </Overlay>
      )}
            <div className={style.imageContainer}>
                <img 
                src={urlFor(image && image[index])}
                className={style.productDetailImage} />
                <div className={style.smallImagesContainer}>
                {image?.map((item, i) => (
                    <img 
                        key={i}
                        src={urlFor(item)}
                        className={i === index ? `${style.smallImage} ${style.selectedImage}` : `${style.smallImage}`}
                        onMouseEnter={() => setIndex(i)}
                    />
                ))}
                </div>
            </div>
            <div className={style.productDetailDesc}>
                <h2>{name}</h2>
                <p className={style.productSubtitle}> <em>{subtitle}</em></p>
                <br></br>
                <hr></hr>
                <p className={style.productDescription}>{description}</p>
                <br></br>
                {/* <hr></hr> */}
                <p className={style.price}>${price}</p>
                <div className={style.buttons}>
                    <p className={style.quantity}>
                        <span className={style.quantityDesc}>Quantity:</span>
                        <button className={style.minus} onClick={decQty}><AiOutlineMinus /></button>
                        <span className={style.number}>{qty}</span>
                        <button className={style.plus} onClick={incQty}><AiOutlinePlus /></button>
                    </p>
                    <button 
                    type='button' 
                    className={style.addToCart}
                    onClick={() => onAdd(product, qty)}>Add to Cart
                    </button>
                    <button
                    className={style.buyNow} 
                    onClick={handleOverlayToggle}>Pre-order</button>
                </div>
                {highlight1 && (
                <div className={style.productAccessoryContainer}>
                    {/* <h3 className={style.productAccessoryTitle}>Pass Includes...</h3>
                    <ul className={style.productAccessoryList}>
                        <li className={style.productAccessory}>{highlight1}</li>
                        <li className={style.productAccessory}>{highlight2}</li>
                        <li className={style.productAccessory}>{highlight3}</li>
                        <li className={style.productAccessory}>{highlight4}</li>
                    </ul> */}
                </div>
                    )
                }
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