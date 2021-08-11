import PropTypes from 'prop-types'
import clsx from 'clsx'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link, RichText } from '../Prismic'
import styles from './styles.module.scss'

const PostList = ({ posts }) => {
    return (
        <ul className={styles.list}>
            {posts.map((post) => (
                <li key={post.uid} className={clsx(styles.item, 't-logo')}>
                    <Link document={post}>
                        <RichText content={post.data.title} asText />
                        <ArrowForwardIcon />
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
