import clsx from 'clsx'
import React from 'react'
import Logo from '../../Logo'
import styles from './styles.module.scss'

type Props = {
    // children: React.ReactNode
}

const Header: React.FC<Props> = () => {
    return (
        <header className={clsx(styles.outer, 'container')}>
            <Logo />
        </header>
    )
}

Header.propTypes = {}

export default Header
