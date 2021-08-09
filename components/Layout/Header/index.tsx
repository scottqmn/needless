/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import Logo from '../../Logo'
import styles from './styles.module.scss'

type Props = {
    // children: React.ReactNode
}

const Header: React.FC<Props> = () => {
    const links = [
        { text: 'About', href: '/about' },
        { text: 'Archive', href: '/posts' },
        { text: 'Related', href: '/related' },
    ]
    return (
        <header className={styles.outer}>
            <div className={clsx(styles.inner, 'container')}>
                <Link href='/'>
                    <a>
                        <Logo />
                    </a>
                </Link>
                <div className={clsx(styles.links, 't-logo')}>
                    {links.map(({ text, href }) => (
                        <div key={href}>
                            <Link href={href}>
                                <a>{text}</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header
