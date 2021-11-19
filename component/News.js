
import React from 'react'
import Link from 'next/link'
import Card from './Card'
import articles from '../pages/api/articles'

import img0 from '/public/pictures/img_when_2.jpg'
import img1 from '/public/pictures/img_when.jpg'
import img2 from '/public/pictures/img_when_2.jpg'
import img3 from '/public/pictures/img_when_2.jpg'
import img4 from '/public/pictures/img_when_2.jpg'
import img5 from '/public/pictures/img_when.jpg'

var imgCardList = [img0, img1, img2, img3, img4, img5]


// var news = articles
var news = Object.values(articles)
var news4 = news.reverse().slice(0,4)
var i = 0
export default function News() {

    return (
        <div className='centered-content'>
             <div className="g1-1-r2">
                    {news4.map((post)=>(
                <Link key={post.id} href={'/News'+post.path} passHref>
                    <div  style={{margin:20}}>
                        {console.log(post.id)}
                        <Card title={post.title} date={post.date} img={imgCardList[post.id - 1]}/>
                    </div>
                </Link>
                    
                
                ))}
               </div> 
            <div>
                <Link href='/News' passHref><button type="button" name="myButton" className='button'>Actualités</button></Link>
            </div>
        </div>
    )
}
