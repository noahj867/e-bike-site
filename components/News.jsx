import React from 'react'
import style from 'styles/news.module.css'
import Link from 'next/link' 

const News = () => {

const newsItems = [
    {
        link:"https://www.cbsnews.com/newyork/news/new-e-bike-safety-measures-in-nyc-after-deadly-chinatown-fire/",
        image: "/news-link1.jpg"
    }, 
    {   link:"https://www.nytimes.com/2021/10/12/nyregion/ebikes-escooters-eskateboards-nyc.html",
        image: "/news-link2.jpg"
    },
    {   link:"https://abcnews.go.com/US/amid-rise-fires-deaths-new-york-city-enacts-e-bike-law/story?id=97984159",
        image: "/news-link3.jpg"
    },
    {   
        link:"https://gothamist.com/news/delivery-workers-say-latest-nyc-e-bike-safety-bills-dont-give-enough-support",
        image: "/news-link4.jpg"
    }
]

  return (
    <>
        <h1 className={style.newsHeader}>News</h1>
        {newsItems.map((newsItem, index) => (
            <div key={index} className={style.newsContainer}>
                <Link href={newsItem.link}>
                <img src={newsItem.image} className={style.newsCard} />
                </Link>
                    
            </div>
    ))}
    </>
  )
}

export default News