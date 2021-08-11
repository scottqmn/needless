/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import clsx from 'clsx'
import Logo from '../../Logo'
import { Link } from '../../Prismic'
import { prismicLinkPropType } from '../../../prop-types/prismic'
import styles from './styles.module.scss'

const Header = ({ navigation }) => {
    return (
        <header className={styles.outer}>
            <div className={clsx(styles.inner, 'container')}>
                <NextLink href='/'>
                    <a>
                        <Logo />
                    </a>
                </NextLink>
                <nav className={clsx(styles.links, 't-logo')}>
                    {navigation.map(({ text, link }) => (
                        <div key={text}>
                            <Link link={link}>{text}</Link>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    navigation: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, link: prismicLinkPropType })
    ),
}

export default Header
