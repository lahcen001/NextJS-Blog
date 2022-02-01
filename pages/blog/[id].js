import React from 'react'
export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
    const data = await res.json()
    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths, fallback: false
    }



}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json()
    return {
        props: { post: data }
    }
}
const post = ({ post }) => {
    return (
        <div className="container">
            <h2>{post.title}</h2>
            <img src={`https://source.unsplash.com/100x100/?${post.id}`} className="card-img-top" alt="..." />
            <p>{post.body}</p>
        </div>
    )
}

export default post
