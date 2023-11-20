import React from 'react'
import style from 'styles/overlay.module.css'

const Overlay = ({children, toggleOverlay}) => {
  return (
    <div className={style.overlay}>
        <div className={style.overlayContent}>
            {children}
        </div>
    </div>
  )
}

export default Overlay