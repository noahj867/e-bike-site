import React from 'react'
import style from 'styles/news.module.css'
import Link from 'next/link' 

const News = () => {

const newsItems = [
    {
        link:"https://www.cbsnews.com/newyork/news/new-e-bike-safety-measures-in-nyc-after-deadly-chinatown-fire/",
        image:"/news-link1.jpg",
        headline:"New Ebike safety measures in nyc after deadly chinatown fire"
    }, 
    {   link:"https://www.nytimes.com/2021/10/12/nyregion/ebikes-escooters-eskateboards-nyc.html",
        image:"/news-link2.jpg",
        headline:"ebikes escooters eskateboards nyc"
    },
    {   link:"https://abcnews.go.com/US/amid rise fires deaths new york city enacts e bike law/story?id=97984159",
        image: "/news-link3.jpg",
        headline:"amid-rise-fires-deaths-new-york-city-enacts-e-bike-law"
    },
    {   
        link:"https://gothamist.com/news/delivery-workers-say-latest-nyc-e-bike-safety-bills-dont-give-enough-support",
        image: "/news-link4.jpg",
        headline:"delivery-workers-say-latest-nyc-e-bike-safety-bills-dont-give-enough-support"
    }
]

  return (
    <>
        <h1 className={style.newsHeader}>News</h1>
        <div className={style.newsContainer}>
            {newsItems.map((newsItem, index) => (
                <div key={index} className={style.newsCard}>
                    <Link href={newsItem.link}>
                        <img src={newsItem.image} className={style.newsImage} />
                        <h2 className={style.newsHeadline}>{newsItem.headline.charAt(0).toUpperCase() + newsItem.headline.slice(1).replace(/-/g, ' ')}</h2>
                    </Link>   
                </div>
            ))}
            </div>

    </>
  )
}

export default News