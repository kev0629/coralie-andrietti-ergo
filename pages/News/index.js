import head from 'next/head'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'
import Card from '../../component/Card'
import Image from 'next/image'

import img0 from '/public/pictures/img_when_2.jpg'
import img1 from '/public/pictures/img_when_2.jpg'
import img2 from '/public/pictures/img_when_2.jpg'
import img3 from '/public/pictures/img_when_2.jpg'
import img4 from '/public/pictures/img_when_2.jpg'
import img5 from '/public/pictures/img_when_2.jpg'

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
                <div key={post.id} style={{margin:20}}>
                    {console.log(post.imgPath)}
                    <Card title={post.title} date={post.date} img={img0}/>
                </div>
                ))}
               </div> 
            </div>
            </Section>
        </Body> 
    )}
