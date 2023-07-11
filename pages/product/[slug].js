import React, {useState} from 'react';

import {client, urlFor} from '../../lib/client';
import {AiOutlineMinus, AiOutplinePlus, 
AiFillStar, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai';
import style from 'styles/slug.module.css';


const ProductDetails = ({product, products}) => {
    const {image, name, details, price } = product;
    const [index, setIndex] = useState(0)

  return (
    <div>
        <div className={style.productDetailContainer}>
            <div className={style.imageContainer}>
                <img 
                src={urlFor(image && image[index])}
                className={style.productDetailImage} />
                <div className={style.smallImagesContainer}>
                {image?.map((item, i) => (
                    <img 
                        key={i}
                        src={urlFor(item)}
                        // className={i === index ? `${style.smallImage} ${style.selectedImage} : ${style.smallImage}`}
                        onMouseEnter={() => setIndex(i)}
                    />
                ))}
                </div>
            </div>
            <div className={style.productDetailDesc}>
                <h1>{name}</h1>
                <div className={style.reviews}>
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
                <p className={style.price}>${price}</p>
                <div className={style.quantity}>
                    <h3>Quantity:</h3>
                    <p className={style.quantityDesc}>
                        <span className={style.minus} onClick=''><AiOutlineMinus/></span>
                        <span className={style.num} onclick=''>0</span>
                        <span className={style.plus} onClick=''><AiOutlinePlus/></span>
                    </p>
                </div>
                <div className={style.buttons}>
                    <button 
                    type='button' 
                    className={style.addToCart}
                    onClick=''>Add to Cart
                    </button>
                    <button
                    className={style.buyNow} 
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