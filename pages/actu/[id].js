import articles from '../api/articles'



export default function Post({post}) {
    return(
        <>
        <p>
            {post.body}
        </p>
        </>
    )
}
