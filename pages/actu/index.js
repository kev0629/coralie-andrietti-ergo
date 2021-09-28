import head from 'next/head'
import { useState, useEffect } from 'react'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles.json'

export default function ActuPage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const data = fetch('http://localhost:3000/api/hello')
            .then(r => r.json())
            .then(setPosts)
        
    }, [])
    return (
        <Body>
            <Section title='Atcualités'>
                {posts.map((post)=>(
                // <div key={post.id}>{post.body}</div>
                <div key={post.id} dangerouslySetInnerHTML={{__html: post.body}}></div>
                ))}
                
            </Section>
        </Body>
    )}