import React, { useMemo } from 'react'
import clsx from 'clsx'
import PostList from '../../components/PostList'
import { RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'
import styles from './styles.module.scss'

type Props = {
    search: { results: Document[] }
}

const Search: React.FC<Props> = ({ search }) => {
    const items = useMemo(() => {
        return search.results.reduce((acc, curr) => {
            const { type } = curr

            if (!acc[type]) {
                acc[type] = []
            }

            acc[type].push(curr)

            return acc
        }, {})
    }, [search])

    console.log(search, search.results, items)

    return (
        <div>
            SEARCH
            {items.category?.length ? <div>category</div> : null}
            {items.post?.length ? (
                <div>
                    posts
                    <PostList posts={items.post} />
                </div>
            ) : null}
        </div>
    )
}

export default Search
