import React from 'react'
import style from 'styles/location.module.css'

const Location = () => {
  return (
    <div className={style.mapContainer}>
        <iframe className={style.map} src="https://www.google.com/maps/d/u/0/embed?mid=1UgE_UhWscDIW_Sq4jJQblUak0RdsgV0&ehbc=2E312F" width="640" height="480" ></iframe>
    </div>
  )
}

export default Location