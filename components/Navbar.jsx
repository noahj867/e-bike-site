import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from "styles/navbar.module.css";
import { FadeIn } from '../components';
import MenuIcon from '@mui/icons-material/Menu';

import { Cart, Menu } from './'

import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';

const Navbar = () => {
  const { showCart, setShowCart, showMenu, setShowMenu, totalQuantities, } = useStateContext();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    } 

    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [showMenu])
  return (
    <div className={style.navbarContainer}>
      <MenuIcon className={style.menuIcon} onClick={() => setShowMenu(prevState => !prevState)}/>
      {showMenu && <Menu/>}
      <div className={style.imageWrapper}>
        <Link href="/">
          <img src="/logo.png" className={style.logo}/>
        </Link>
      </div>
      <div className={style.navbarItemContainer}>
        <p className={style.navbarItem}>
          <Link href="/#aboutus">About Us</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/#howitworks">How It Works</Link>
        </p>
        <p className={style.navbarItem}>
          <Link href="/location">Locations</Link>
        </p>
        <div className={style.dropDown}>
          <p className={style.navbarItem}>
            <Link href="/product/product-page">Store</Link>
          </p>
          {/* <ArrowDropDownIcon className={style.dropDownIcon}/>  */}
          {/* <div className={style.dropDownContent}>
            <p className={style.dropDownItem}>
              <Link href="/#">Home</Link>
            </p>
            <p className={style.dropDownItem}>
              <Link href="/#">Bikes</Link>
            </p>
            <p className={style.dropDownItem}>
              <Link href="/#">Accessories</Link>
            </p>
            <p className={style.dropDownItem}>
              <Link href="/#">Passes</Link>
            </p>
          </div> */}
        </div>
      </div>
      <button type='button' className={style.cartIcon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={style.cartItemQty}>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}
export default Navbar
