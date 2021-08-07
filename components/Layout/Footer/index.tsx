import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

type Props = {
    // children: React.ReactNode
}

const Footer: React.FC<Props> = () => {
    const date = new Date()
    const startYear = 2020
    const currentYear = date.getFullYear()
    const years = `©${startYear}${
        currentYear !== startYear ? `–${currentYear}` : ''
    }`

    return (
        <footer className={clsx(styles.outer, 'container')}>
            <div className='t-logo'>{years}</div>
        </footer>
    )
}

Footer.propTypes = {}

export default Footer
