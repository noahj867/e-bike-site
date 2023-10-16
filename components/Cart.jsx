import React, { useRef } from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, 
  AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import style from 'styles/cart.module.css';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const productData = cartItems.map(item => ({
      id: item._id,
      quantity: item.quantity
    })) 

    const response = await fetch('/api/stripe', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    });
    if(response.status === 500) return;

    const data = await response.json();
  
    toast.loading('Redirecting...');
  
    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className={style.wrapper} ref={cartRef}>
      <div className={style.container}>
        <button 
        type="button"
        className={style.heading}
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft size={20}/>
          <span className={style.title}>Your Cart:</span>
          <span className={style.cartItems}>{` (${totalQuantities} items)`}</span>

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
                  <div className={style.flexBottom}>
                    <p className={style.quantityDesc}>
                      <span className={style.minus} onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                      <span className={style.number} onClick=''>{item.quantity}</span>
                      <span className={style.plus} onClick={() => toggleCartItemQuantity(item._id, 'inc')}> <AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={style.removeItem}
                    onClick={() => onRemove(item)}>
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
                  onClick={handleCheckout}>
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