import head from 'next/head'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'
import Card from '../../component/Card'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import img0 from '/public/pictures/articles/cards/screen.png'
import img1 from '/public/pictures/articles/cards/timer.png'
import img2 from '/public/pictures/articles/cards/Qaund_consulter.png'
import img3 from '/public/pictures/articles/cards/pap_pps_picture.png'
import img4 from '/public/pictures/articles/cards/placer sa feuille.png'
import img5 from '/public/pictures/articles/cards/equilibre_vignetet.png'
import img6 from '/public/pictures/articles/cards/troubles.png'
import img7 from '/public/pictures/articles/cards/flemme_vs_difficutes.png'
var imgCardList = [img0, img1, img2, img3, img4, img5, img6, img7]

var news = Object.values(articles)
news = news.reverse()
export default function ActuPage() {
    return (
        <Body>
            <Section title='Actualités'>
            <Link href='/#actu' passHref><motion.button type="button" name="myButton" className='button' whileHover={{scale:1.1}}>{'Retour'}</motion.button></Link>
            <div className='centered-content'>
             <div className="g1-1-r2">
                    {news.map((post)=>(
                <Link key={post.id} href={'/News'+post.path} passHref>
                    <div key={post.id} style={{margin:20}} className='link'>
                        <Card title={post.title} date={post.date} img={imgCardList[post.id - 1]}/>
                    </div>
                </Link>
                ))}
               </div> 
            </div>
            </Section>
        </Body> 
    )}
