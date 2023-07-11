import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import style from 'styles/footer.module.css'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>2023 24 Hr Battery All Right Reserved</p>
      <p className={style.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>

    </div>
  )
}

export default Footer