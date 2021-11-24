import head from 'next/head'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'
import Card from '../../component/Card'
import Image from 'next/image'
import Link from 'next/link'

import img0 from '/public/pictures/articles/cards/screen.jpg'
import img1 from '/public/pictures/articles/cards/timer.png'
import img2 from '/public/pictures/articles/cards/Qaund_consulter.jpg'
import img3 from '/public/pictures/articles/cards/pap_pps_picture.jpg'
import img4 from '/public/pictures/articles/cards/placer sa feuille.png'
import img5 from '/public/pictures/articles/cards/equilibre_vignetet.jpg'
var imgCardList = [img0, img1, img2, img3, img4, img5]

var news = Object.values(articles)
news = news.reverse()
export default function ActuPage() {
    return (
        <Body>
            <Section title='Atcualités'>
            <div className='centered-content'>
             <div className="g1-1-r2">
                    {news.map((post)=>(
                        // console.log(post)
                <Link key={post.id} href={'/News'+post.path} passHref>
                    <div key={post.id} style={{margin:20}}>
                        {console.log(post.imgPath)}
                        <Card title={post.title} date={post.date} img={imgCardList[post.id - 1]}/>
                    </div>
                </Link>
                ))}
               </div> 
            </div>
            </Section>
        </Body> 
    )}
