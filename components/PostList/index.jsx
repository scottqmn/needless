import PropTypes from 'prop-types'
import NextLink from 'next/link'
import clsx from 'clsx'
import { Link, RichText } from '../Prismic'
import styles from './styles.module.scss'

const PostList = ({ posts = [] }) => {
    if (posts.length === 0) {
        return (
            <div className={clsx(styles.empty, 't-h2')}>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <div>// todo: put something here eventually</div>
                <NextLink href='/'>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>go home</a>
                </NextLink>
            </div>
        )
    }

    return (
        <ul className={styles.list}>
            {posts.map((post) => {
                const { featured, title } = post.data
                return (
                    <li
                        key={post.uid}
                        className={clsx(
                            styles.item,
                            featured && styles.isFeatured,
                            't-logo'
                        )}
                    >
                        <Link document={post}>
                            <RichText content={title} asText />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

PostList.propTypes = {
    posts: PropTypes.array,
}

export default PostList
