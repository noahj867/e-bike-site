import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from "styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <p className={style.logo}>
        <Link href="/">E-Bike Site</Link>
      </p>
      <div className={style.navbarItemContainer}>
        <p className={style.navbarItem}>
          <Link href="">About Us</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="">Locations</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/product/product-page">Products</Link>
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
