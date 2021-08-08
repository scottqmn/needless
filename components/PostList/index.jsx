import PropTypes from 'prop-types'
import { Link, RichText } from '../Prismic'
import styles from './styles.module.scss'

const PostList = ({ posts }) => {
    return (
        <ul classList>
            {posts.map((post) => (
                <li key={post.uid}>
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
