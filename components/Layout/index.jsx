/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import styles from './styles.module.scss'
import { prismicLinkPropType } from '../../prop-types/prismic'

const Layout = ({ children, navigation, social }) => {
    return (
        <div className={styles.outer}>
            <Header navigation={navigation} />
            <main>{children}</main>
            <Footer social={social} />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    navigation: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, link: prismicLinkPropType })
    ),
    social: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string, link: prismicLinkPropType })
    ),
}

export default Layout
