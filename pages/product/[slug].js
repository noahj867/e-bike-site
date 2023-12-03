import React, {useState} from 'react';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import {client, urlFor} from '../../lib/client';
import {AiOutlineMinus, AiOutplinePlus, 
AiFillStar, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import style from 'styles/slug.module.css';
import {Form, Overlay} from '../../components';


const ProductDetails = ({product, products}) => {
    const {
        image, 
        name, 
        description,
        price, 
        subtitle, 
        spec1, 
        spec2, 
        spec3, 
        spec4, 
        spec5,
        spec6, 
        spec7 , 
        spec8, 
        spec9, 
        spec10,
        spec11,
        specDetails1,
        specDetails2,
        specDetails3,
        specDetails4,
        specDetails5,
        specDetails6,
        specDetails7,
        specDetails8,
        specDetails9,
        specDetails10,
        specDetails11
      } 
      = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, showOverlay, handleOverlayToggle} = useStateContext();
    const specs = [
        {title: spec1, details: specDetails1},
        {title: spec2, details: specDetails2},
        {title: spec3, details: specDetails3},
        {title: spec4, details: specDetails4},
        {title: spec5, details: specDetails5},
        {title: spec6, details: specDetails6},
        {title: spec7, details: specDetails7},
        {title: spec8, details: specDetails8},
        {title: spec9, details: specDetails9},
        {title: spec10, details: specDetails10},
        {title: spec11, details: specDetails11}
    ]
    
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
                {spec1 && (
                    <details>
                        <summary className={style.specDropDown}>
                            Specs
                        </summary>
                        <div className={style.specSection} >
                        {specs.map((item, i) => (
                            <div className={style.specWrapper} key={i}>
                                <div className={style.specContainer}>
                                    <h4 className={style.specTitle}>{item.title}</h4>
                                    <h5 className={style.specDetails}>{item.details}</h5>
                                </div>
                                <hr className={style.specLineBreak}/>
                            </div>
                        ))}
                        </div>
                    </details>
                    )
                }
                {console.log(product)}
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