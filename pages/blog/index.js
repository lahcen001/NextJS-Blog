import React from 'react'
import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
    const data = await res.json()
    return {
        props: { posts: data }
    }
}
const index = ({ posts }) => {
    return (
        <div className="container">
            <div className="row">

                <h1>Post</h1>

                {posts.map(post => (

                    <div className="col-md-4 my-2">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={`https://source.unsplash.com/720x400/?${post.id}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                              
                                <Link href={`/blog/${post.id}`} ><a className="btn btn-primary">Go somewhere</a></Link>
                            </div>
                        </div>
                    </div>


                ))

                }


            </div>
        </div>


    )
}

export default index
