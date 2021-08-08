import React from 'react'
import PostList from '../../components/PostList'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    posts: { results: Document[] }
    preview: boolean
}

const Page: React.FC<Props> = ({ document, posts, preview }) => {
    console.log(document, posts, preview)
    console.log(posts)
    return (
        <div>
            <PostList posts={posts.results} />
        </div>
    )
}

export default Page
