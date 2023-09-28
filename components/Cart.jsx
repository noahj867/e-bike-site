import React, { useRef } from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, 
  AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Toast } from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import style from 'styles/cart.module.css';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

  return (
    <div className={style.wrapper} ref={cartRef}>
      <div className={style.container}>
        <button 
        type="button"
        className={style.heading}
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft size={20}/>
          <span className={style.title}>Your Cart:</span>
          <span className={style.cartItems}> {totalQuantities} items</span>

        </button>

        {cartItems.length < 1 && (
          <div className={style.emptyCart}>
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button 
              type="button"
              onClick={() => setShowCart(false)}
              className={style.button}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
          <div className={style.productContainer}>
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className={style.product} key={item._id}>
                <img alt="no pic" src={urlFor(item?.image[0])} className={style.productImage} />
                <div className={style.itemDescription}>
                  <div className={style.flexTop}>
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className={style.flexTop}>
                    <p className={style.quantity}>
                      <span className={style.quantityDesc}>Quantity:</span>
                      <span className={style.minus} onClick=""><AiOutlineMinus /></span>
                      <span className={style.number} onClick=''>0</span>
                      <span className={style.plus} onClick=""><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={style.removeItem}
                    onClick="">
                      <TiDeleteOutline/>
        
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div className={style.cartBottom}>
              <div className={style.total}>
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className={style.buttonContainer}>
                <button 
                  type="button"
                  className={style.btn}
                  onClick="">
                    Pre-order with Stripe
                </button>
              </div>
            </div>
          )}
      </div>
    </div>

  )
}

export default Cart