
import React from 'react'
import Link from 'next/link'
import Card from './Card'
import articles from '../pages/api/articles'
import { motion } from 'framer-motion'

// import img0 from '/public/pictures/articles/cards/screen.png'
// import img1 from '/public/pictures/articles/cards/timer.png'
// import img2 from '/public/pictures/articles/cards/Qaund_consulter.png'
// import img3 from '/public/pictures/articles/cards/pap_pps_picture.png'
// import img4 from '/public/pictures/articles/cards/placer sa feuille.png'
// import img5 from '/public/pictures/articles/cards/equilibre_vignetet.png'
// import img6 from '/public/pictures/articles/cards/troubles.png'
// import img7 from '/public/pictures/articles/cards/flemme_vs_difficutes.png'
// import img8 from '/public/pictures/articles/cards/autonomy.png'
// import img9 from '/public/pictures/articles/cards/inclusion.png'

// var imgCardList = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9]


// var news = articles
export default function News(posts) {
    console.log(posts.posts.slice(0,4))

    return (
        <div className='centered-content'>
             <div className="g1-1-r2 ">
                
                {posts.posts.slice(0,4).map((post, index)=>(
                <Link key={post.id} href={'/posts/'+post.slug} passHref>
                    <div  key={post.id} style={{margin:20}} className={'div'+(index+1)+' link'}>
                        <Card  title={post.title}  img={post.coverImage.url}/>
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
