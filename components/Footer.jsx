import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import style from 'styles/footer.module.css'
import {FadeIn} from '../components';


const Footer = () => {

  const footerContent = [{
    title: "Company", 
    links: [
      {name: "About Us", href:"/#aboutus"},
      {name: "Store ", href:"/product/product-page"},
      {name: "Locations ", href:"/location"},
      {name: "Contact ", href:""}],
    },

    {
    title: "Get Started", 
    links: [
      {name: "Download for iPhone", href:""},
      {name: "Download for Android", href:""},
      {name: "Buy Pass", href:"/#passes"},
      {name: "Buy Bike", href:"/product/product-page"}],
    },
    {
    title: "Learn More", 
    links: [
      {name: "News", href:"/#news"},
      {name: "FAQ", href:""}]
    }]

  return (
    <FadeIn>
      <div className={style.footerContainer}>
        <div className={style.footerTop}> 
          <img src="logo.png" className={style.logo}/>
          <p className={style.icons}>
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
        </div>
        <hr />
        <div className={style.footerMain}> 
        {footerContent.map((item, i) => (
          <div className={style.contentContainer} key={i}>
                      <a href="../"><b>{item.title}</b></a>
            {item.links.map((i) => <a key={i.href} href={i.href}>{i.name}</a>)}
          </div>
        ))}
        </div>
        <div className={style.footerBottom}>
          <div className={style.logoSecondary}></div>
          <div className={style.copyright}>© 2023 24 Hr Battery. All Rights Reserved</div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Footer