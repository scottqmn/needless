/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import Logo from '../../Logo'
import { Link } from '../../Prismic'
import styles from './styles.module.scss'

type Props = {
    // children: React.ReactNode
    navigation: any[]
}

const Header: React.FC<Props> = ({ navigation }) => {
    console.log(navigation)
    return (
        <header className={styles.outer}>
            <div className={clsx(styles.inner, 'container')}>
                <Link href='/'>
                    <a>
                        <Logo />
                    </a>
                </Link>
                <div className={clsx(styles.links, 't-logo')}>
                    {navigation.map(({ text, link }) => {
                        return (
                            <div key={text}>
                                <Link link={link}>{text}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header
