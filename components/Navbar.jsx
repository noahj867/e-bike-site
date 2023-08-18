import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from "styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <Link href="/">
        <div className={style.imageWrapper}>
          <img src="/logo.png" className={style.logo}/>
        </div>
      </Link>
      <div className={style.navbarItemContainer}>
        <p className={style.navbarItem}>
          <Link href="/#aboutus">About Us</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/#passes">Passes</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/location">Locations</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/product/product-page">Store</Link>
        </p>
        <ArrowDropDownIcon className={style.dropDownIcon}/> 
      </div>
      <button type='button' className={style.cartIcon} onClick=''>
        <AiOutlineShopping />
        <span className={style.cartItemQty}></span>
      </button>
    </div>
  )
}
export default Navbar
