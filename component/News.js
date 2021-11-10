
import React from 'react'
import Link from 'next/link'
import articles from '../pages/api/articles'

export default function News() {

    return (
        <div className='centered-content'>
             <div className="g1-1-r2">
                    {articles.reverse().slice(0,4).map((post)=>(
                <div key={post.id} >
                    <p>{post.title}</p>
                </div>
                ))}
               </div> 
            <div>
                <Link href='/actu' passHref><button type="button" name="myButton" className='button'>Actualités</button></Link>
            </div>
        </div>
    )
}
