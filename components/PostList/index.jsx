import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link, RichText } from '../Prismic'
import styles from './styles.module.scss'

const PostList = ({ posts }) => {
    return (
        <ul className={styles.list}>
            {posts.map((post) => (
                <li key={post.uid} className={clsx(styles.item, 't-logo')}>
                    <Link document={post}>
                        <RichText content={post.data.title} asText />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

PostList.propTypes = {
    posts: PropTypes.array,
}

export default PostList
