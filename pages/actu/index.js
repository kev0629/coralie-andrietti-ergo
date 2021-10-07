import head from 'next/head'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

URLSearchParams
export default function ActuPage() {
    return (
        <Body>
            <Section title='Atcualités'>
                <ul>
                    {articles.map((post)=>(
                <li key={post.id}>{post.title}</li>
                ))}
                </ul>
            </Section>
        </Body>
    )}
