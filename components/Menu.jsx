import React from 'react'
import style from 'styles/menu.module.css'
import { useStateContext } from '../context/StateContext'

const Menu = () => {

const {setShowMenu} = useStateContext()

const menuItems = [
    {name: "About Us", href:"/#aboutus"},
    {name: "Store ", href:"/product/product-page"},
    {name: "Locations ", href:"/location"},
    {name: "Bike", href:"/product/explorer"},
    {name: "News", href:"/#news"}
]

  return (
    <div className={style.wrapper}>
        <div className={style.container}> 
        {menuItems.map((item, i) => (
            <div className={style.itemContainer} key={i}>
                <a className={style.item} href={item.href} onClick={() => setShowMenu(false)}>{item.name}
                </a> 
            </div>
        ))}
        </div>
    </div>
  )
}

export default Menu