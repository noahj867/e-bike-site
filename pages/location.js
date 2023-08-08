import React from 'react';
import style from '../styles/location.module.css';
import {Location} from '../components';

const location = () => {
    const locations = [
        {neighborhood: "Downtown Brooklyn", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Grand Army Plaza", capacity: "10",address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Prospect Park West", capacity: "10", address: "845 Barclays Center, Brooklyn, NY 11211"},
        {neighborhood: "Eastern Parkway", capacity: "10",address: "845 Barclays Center, Brooklyn, NY 11211"}
    ]
    return (
        <>
        <hr className={style.seperator}/>
        <h1 className={style.locationHeader}>Station Locations</h1>
        <hr/>
        <div className={style.sectionContainer}>
        <ul className={style.addressContainer}>
            {locations.map((item, i) => (
                <li className={style.locationList} key={i}>
                    <div className={style.locationWrapper}>
                        <hr className={style.seperator}/>
                        <h2 className={style.locationName}>{item.neighborhood}</h2>
                        <p className={style.batteryCount}>Battery Count: {item.capacity}</p>
                        <p className={style.locationAddress}><em>{item.address}</em></p>
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