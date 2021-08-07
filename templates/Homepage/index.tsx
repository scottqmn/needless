import React from 'react'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    posts: { results: Document[] }
    preview: boolean
}

const Page: React.FC<Props> = ({ document, posts, preview }) => {
    console.log(document, posts, preview)
    return (
        <div>
            {posts.results.map((post) => {
                return (
                    <div key={post.id}>
                        <RichText content={post.data.title} asText />
                    </div>
                )
            })}
        </div>
    )
}

export default Page
