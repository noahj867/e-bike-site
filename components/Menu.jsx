import React from 'react'
import style from 'styles/menu.module.css'

const Menu = () => {

const menuItems = [
    {name: "About Us", href:"/#aboutus"},
    {name: "Store ", href:"/product/product-page"},
    {name: "Locations ", href:"/location"},
    {name: "Passes", href:"/#passes"},
    {name: "News", href:"/#news"}
]

  return (
    <div className={style.wrapper}>
        <div className={style.container}> 
        {menuItems.map((item, i) => (
            <div className={style.itemContainer} key={i}>
                <a className={style.item} href={item.href}>{item.name}
                </a> 
            </div>
        ))}
        </div>
    </div>
  )
}

export default Menu