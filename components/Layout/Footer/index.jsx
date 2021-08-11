import PropTypes from 'prop-types'
import clsx from 'clsx'
import React from 'react'
import Social from '../../Social'
import { prismicLinkPropType } from '../../../prop-types/prismic'
import styles from './styles.module.scss'

const Footer = ({ social }) => {
    const date = new Date()
    const startYear = 2020
    const currentYear = date.getFullYear()
    const years = `©${startYear}${
        currentYear !== startYear ? `–${currentYear}` : ''
    }`

    return (
        <footer className={styles.outer}>
            <div className={clsx(styles.inner, 'container')}>
                <div className='t-logo'>{years}</div>
                <Social items={social} />
            </div>
        </footer>
    )
}

Footer.propTypes = {
    social: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string, link: prismicLinkPropType })
    ),
}

export default Footer
