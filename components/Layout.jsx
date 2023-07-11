import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import style from 'styles/layout.module.css';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>E-Bike Site</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={style.mainContainer}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout