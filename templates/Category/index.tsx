import React from 'react'
import PostList from '../../components/PostList'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    posts: { results: Document[] }
    preview: boolean
}

const Category: React.FC<Props> = ({ document, posts, preview }) => {
    return (
        <div>
            <div className='container'>
                <div className='t-rte'>
                    <RichText content={document.data.title} />
                </div>
                <div className='t-rte'>
                    <RichText content={document.data.description} />
                </div>
                <PostList posts={posts.results} />
            </div>
        </div>
    )
}

export default Category
