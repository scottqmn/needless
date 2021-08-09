import React from 'react'
import PostList from '../../components/PostList'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    posts: { results: Document[] }
    preview: boolean
}

const Homepage: React.FC<Props> = ({ document, posts, preview }) => {
    console.log(document, posts, preview)
    return (
        <div>
            <div className='container'>
                <PostList posts={posts.results} />
            </div>
        </div>
    )
}

export default Homepage
