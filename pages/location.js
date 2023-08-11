import React from 'react';
import style from '../styles/location.module.css';
import {Location} from '../components';

const location = () => {
    const locations = [
        {neighborhood: "Downtown Brooklyn", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Grand Army Plaza", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Prospect Park West", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Eastern Parkway", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"}
    ]
    return (
        <>
        <div id="location">
            <hr className={style.seperator}/>
            <div className={style.header}>
                <h1 className={style.title}>Station Locations</h1>
                <h3 className={style.subtitle}>Conveniently placed all around NYC</h3>
            </div>
            <hr className={style.headerSeperator}/>
            <div className={style.sectionContainer}>
            <Location />
            <ul className={style.addressContainer}>
                {locations.map((item, i) => (
                    <li className={style.list} key={i}>
                        <div className={style.wrapper}>
                            <hr className={style.seperator}/>
                            <h2 className={style.name}>{item.neighborhood}</h2>
                            <p className={style.batteryCount}>Battery Count: {item.capacity}</p>
                            <p className={style.address}><em>{item.address}</em></p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
       </div>
        </>
      )
    }


export default location