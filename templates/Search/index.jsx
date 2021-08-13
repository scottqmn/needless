import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link, RichText } from '../../components/Prismic'
import styles from './styles.module.scss'

const Search = ({ query, search }) => {
    const results = useMemo(() => {
        const sortedResults = search.results.reduce((acc, curr) => {
            const { type } = curr

            if (!acc[type]) {
                acc[type] = []
            }

            acc[type].push(curr)

            return acc
        }, {})

        return Object.entries(sortedResults).map(([type, items]) => {
            return { type, items }
        })
    }, [search])

    const renderLabel = (type, items = []) => {
        const singular = items.length === 1
        let noun

        switch (type) {
            case 'category':
                noun = singular ? 'category' : 'categories'
                break
            case 'post':
                noun = singular ? 'post' : 'posts'
                break
            case 'page':
                noun = singular ? 'page' : 'pages'
                break
            default:
                noun = singular ? 'other thing' : 'other things'
        }

        return `${items.length} ${noun}`
    }

    return (
        <div>
            <div className={styles.header}>
                <div className='container'>
                    <h1 className='t-h1'>Search:{query}</h1>
                </div>
            </div>
            <div className='container'>
                {results.map(({ type, items }) => (
                    <div key={type} className={styles.category}>
                        <h2 className='t-h1'>{renderLabel(type, items)}</h2>
                        <ul>
                            {items.map((item) => {
                                const title = item?.data?.title
                                return (
                                    <li key={item.uid} className='t-h2'>
                                        <Link document={item}>
                                            {title ? (
                                                <RichText
                                                    content={title}
                                                    asText
                                                />
                                            ) : (
                                                '???'
                                            )}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

Search.propTypes = {
    query: PropTypes.string.isRequired,
    search: PropTypes.shape({ results: PropTypes.array }),
}

export default Search
