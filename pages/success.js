import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';import { useRouter } from 'next/router';
import style from '../styles/successPage.module.css'


import {useStateContext} from '../context/StateContext';
import runFireworks from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    console.log(setTotalQuantities);


    useEffect(() => {
        localStorage.clear();
        setTotalQuantities(0);
        setCartItems([]);
        setTotalPrice(0);
        runFireworks();
        }, []);
  return (
    <div className={style.wrapper}>
        <div className={style.success}>
            <p className={style.icon}>
                <AssignmentTurnedInIcon/>
            </p>
            <h2>Thank you for your order!</h2>
            <p className={style.emailMsg}>Check your email inbox for your receipt.</p>
            <p className={style.description}>If you have any questions, please email
                <a href="mailto:24hourbatterynyc@gmail.com">24hourbatterynyc@gmail.com</a>
            </p>
            <Link href="/">
                <button type="button" className={style.button}>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success