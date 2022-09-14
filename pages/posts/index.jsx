import head from 'next/head'
import Body from '../../components/Body'
import Section from '../../components/Section'
import articles from '../api/articles'
import Card from '../../components/Card'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {getAllPostsForHome} from '../../lib/api'



export default function ActuPage(props) {
    return (
        <Body>
            <Section title='Actualités'>
            <Link href='/#actu' passHref><motion.button type="button" name="myButton" className='button' whileHover={{scale:1.1}}>{'Retour'}</motion.button></Link>
            <div className='centered-content'>
             <div className="g1-1-r2">
                    {/* {news.map((post)=>(
                <Link key={post.id} href={'/posts'+post.path} passHref>
                    <div key={post.id} style={{margin:20}} className='link'>
                        <Card title={post.title} date={post.date} img={imgCardList[post.id - 1]}/>
                    </div>
                </Link>
                ))} */}
                {console.log(props.allPosts)}
                {props.allPosts.map((post)=>(
                <Link key={post.id} href={'/posts/'+post.slug} passHref>
                    <div key={post.id} style={{margin:20}} className='link'>
                        <Card title={post.title} img={post.coverImage.url}/>
                    </div>
                </Link>    
                ))}
               </div> 
            </div>
            </Section>
        </Body> 
    )}

    export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}

    // export async function getStaticProps({ preview = false }) {
    //     const allPosts = (await getAllPostsForHome(preview)) ?? []
    //     const allInfos = (await getAllinfos()) ?? []
    //     const notion = new Client({ auth: process.env.NOTION_API_KEY });
    //     const databaseId = process.env.DATABASE_ID;
    //     const response = await notion.databases.query({
    //       database_id: process.env.DATABASE_ID,
    //     });
    //     return {
    //       props: { preview, 
    //               allPosts,
    //                allInfos, 
    //               //  datas :response.results.slice(0).reverse()
    //                },
    //     }
    //   }
    