import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import style from 'styles/footer.module.css'

const Footer = () => {

  const footerContent = [{
    title: "Company", 
    links: [
      {name: "About Us", href:"../about-us"},
      {name: "Store ", href:"../juu"},
      {name: "Locations ", href:""},
      {name: "Contact ", href:""}],
    },
    {

    title: "Get Started", 
    links: [
      {name: "Download for iPhone", href:""},
      {name: "Download for Android", href:""},
      {name: "Buy Pass", href:""},
      {name: "Buy Bike", href:""}],
    },
    {
    title: "Learn More", 
    links: [
      {name: "News", href:""},
      {name: "FAQ", href:""}]
    }]
  
  // }, {
  // title: "Get Started", link1: "Download for iPhone", link2: "Download for Android", link3: "Buy Pass", link4: "Buy Bike"
  // },
  // {
  //   title: "Learn More", link1: "News", link2: "FAQ" 
  // }

  return (
    <div className={style.footerContainer}>
      <div className={style.footerTop}> 
        <h3 className={style.logo}>24 Hour Battery</h3>
        <p className={style.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      </div>
      <div className={style.footerMain}> 
      {footerContent.map((item, i) => (
        <div className={style.contentContainer} key={i}>
                    <a href="../"><b>{item.title}</b></a>
          {item.links.map((i) => <a key={i.href} href={i.href}>{i.name}</a>)}
          {/* <a href="../">{item.link1}</a>
          <a href="../">{item.link2}</a>
          <a href="../">{item.link3}</a>
          <a href="../">{item.link4}</a> */}
        </div>
      ))}
      </div>
      <div className={style.footerBottom}>
        <div className={style.logoSecondary}></div>
        <div className={style.copyright}>All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer