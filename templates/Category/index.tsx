import React from 'react'
import clsx from 'clsx'
import PostList from '../../components/PostList'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'
import styles from './styles.module.scss'

type Props = {
    document: Document
    posts: { results: Document[] }
    preview: boolean
}

const Category: React.FC<Props> = ({ document, posts, preview }) => {
    return (
        <div>
            <div className={styles.intro}>
                <div className='container ta-center'>
                    <div className='t-rte'>
                        <RichText content={document.data.title} />
                        <RichText content={document.data.description} />
                    </div>
                </div>
            </div>
            <div className={clsx(styles.posts, 'container')}>
                <PostList posts={posts.results} />
            </div>
        </div>
    )
}

export default Category
