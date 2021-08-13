import { useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import SearchIcon from '../../public/icons/search.svg'
import styles from './styles.module.scss'

const Search = ({ className }) => {
    const router = useRouter()
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/s/${query}`)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <form
            className={clsx(styles.search, className)}
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                name='search_query'
                placeholder='Search'
                aria-label='Search'
                value={query}
                onChange={handleChange}
                required
            />
            <button type='submit' aria-label='Submit search'>
                <SearchIcon />
            </button>
        </form>
    )
}

Search.propTypes = {
    className: PropTypes.string,
}

export default Search
