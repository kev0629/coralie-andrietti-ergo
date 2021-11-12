
import React from 'react'
import Link from 'next/link'
import Card from './Card'
import articles from '../pages/api/articles'

import img0 from '/public/pictures/img_when_2.jpg'
import img1 from '/public/pictures/img_when_2.jpg'
import img2 from '/public/pictures/img_when_2.jpg'
import img3 from '/public/pictures/img_when_2.jpg'
import img4 from '/public/pictures/img_when_2.jpg'
import img5 from '/public/pictures/img_when_2.jpg'

// var news = articles
var news = Object.values(articles)
var news4 = news.reverse().slice(0,4)
export default function News() {

    return (
        <div className='centered-content'>
             <div className="g1-1-r2">
                    {news4.map((post)=>(
                        // console.log(post)
                <div key={post.id} style={{margin:20}}>
                    {/* <p>{post.title}</p> */}
                    {console.log(post)}
                    <Card title={post.title} date={post.date} img={img0}/>
                </div>
                
                ))}
               </div> 
            <div>
                <Link href='/actu' passHref><button type="button" name="myButton" className='button'>Actualités</button></Link>
            </div>
        </div>
    )
}
