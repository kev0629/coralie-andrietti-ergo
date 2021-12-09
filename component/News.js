
import React from 'react'
import Link from 'next/link'
import Card from './Card'
import articles from '../pages/api/articles'
import { motion } from 'framer-motion'

import img0 from '/public/pictures/articles/cards/screen.jpg'
import img1 from '/public/pictures/articles/cards/timer.png'
import img2 from '/public/pictures/articles/cards/Qaund_consulter.jpg'
import img3 from '/public/pictures/articles/cards/pap_pps_picture.jpg'
import img4 from '/public/pictures/articles/cards/placer sa feuille.png'
import img5 from '/public/pictures/articles/cards/equilibre_vignetet.jpg'

var imgCardList = [img0, img1, img2, img3, img4, img5]


// var news = articles
var news = Object.values(articles)
var news4 = news.reverse().slice(0,4)
export default function News() {

    return (
        <div className='centered-content'>
             <div className="g1-1-r2">
                    {news4.map((post, index)=>(
                <Link key={post.id} href={'/News'+post.path} passHref>
                    
                    <div  style={{margin:20}} className={'div'+(index+1)}>
                        <Card title={post.title} date={post.date} img={imgCardList[post.id - 1]}/>
                    </div>
                    
                </Link>
                    
                
                ))}
               </div> 
            <div>
                <Link href='/News' passHref><motion.button type="button" name="myButton" className='button' whileHover={{scale:1.1}}>Voir plus</motion.button></Link>
            </div>
        </div>
    )
}
