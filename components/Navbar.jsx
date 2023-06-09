import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">E-Bike Site</Link>
      </p>
      <p className="navbar-item">
        <Link href="">About Us</Link>
      </p>
      <p className="navbar-item">
        <Link href="">Locations</Link>
      </p>
      <p className="navbar-item">
        <Link href="">Bikes</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}
export default Navbar
