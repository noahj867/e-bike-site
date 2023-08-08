import React from 'react';
import style from '../styles/location.module.css';
import {Location} from '../components';

const location = () => {
    const locations = [
        {neighborhood: "Downtown Brooklyn", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Downtown Brooklyn", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Downtown Brooklyn", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Downtown Brooklyn", address: "845 Barclays Center, Brooklyn, NY 11211"}
    ]
    return (
        <>
        <hr className={style.seperator}/>
        <h1 className={style.locationHeader}>Station Locations</h1>
        <hr className={style.seperatorStraight}/>
        <div className={style.sectionContainer}>
        <ul className={style.addressContainer}>
            {locations.map((item, i) => (
                <li className={style.locationList} key={i}>
                    <div className={style.locationWrapper}>
                        <hr className={style.seperator}/>
                        <h2 className={style.locationName}>{item.neighborhood}</h2>
                        <p className={style.locationAddress}>{item.address}</p>
                    </div>
                </li>
            ))}
            </ul>
            <Location />
        </div>
        </>
      )
    }


export default location