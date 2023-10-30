import React, { useEffect } from 'react';
import style from '../styles/location.module.css';
import {Map} from '../components';

const Location = () => {
    const locations = [
        {neighborhood: "Downtown Brooklyn", capacity: "10", address: "Fowler Square, Brooklyn, NY 11217"},
        {neighborhood: "Grand Army Plaza", capacity: "10", address: "10 Plaza Street East #1h, Brooklyn, NY 11238"},
        {neighborhood: "Prospect Park West", capacity: "10", address: "Prospect Park Southwest, Brooklyn, NY 11215"},
        {neighborhood: "Crown Heights", capacity: "10", address: "824 Nostrand Ave., Brooklyn, NY 11216"}, 
        {neighborhood: "Bed Stuy", capacity: "10", address: "1387 Atlantic Ave, Brooklyn, NY 11216"}
    ]

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
        document.body.style.overflow = '';
        };
    }, []);

    return (

        <>
        <div className={style.comingSoonOverlay}>
            <div className={style.comingSoonText}>Coming Soon... </div>
        </div>
        <div id="location" className={style.sectionWrapper}>
            <hr className={style.seperator}/>
            <div className={style.header}>
                <h1 className={style.title}>Station Locations</h1>
                <h4 className={style.subtitle}>Conveniently placed all around NYC</h4>
            </div>
            {/* <hr className={style.headerSeperator}/> */}
            <div className={style.sectionContainer}>
            <Map />
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


export default Location