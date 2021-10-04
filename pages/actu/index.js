import head from 'next/head'
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

URLSearchParams
export default function ActuPage() {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const data = fetch('http://localhost:3000/api/hello')
    //         .then(r => r.json())
    //         .then(setPosts)
        
    // }, [])
    return (
        <Body>
            <Section title='Atcualités'>
                <ul>
                    {articles.map((post)=>(
                <li key={post.id}>{post.title}</li>
                ))}
                </ul>
                {/* {posts.map((post)=>(
                <div key={post.id} dangerouslySetInnerHTML={{__html: post.body}}></div>
                ))} */}
                
                
            </Section>
        </Body>
    )}

// export async function getStaticProps(){
//     return{
//         props:{
//             articles
//         }
//     }
// }