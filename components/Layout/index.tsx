/* eslint-disable */
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
    navigation: any[]
    social: any[]
}

const Layout = ({ children, navigation, social }) => {
    return (
        <div className={styles.outer}>
            <Header navigation={navigation} />
            <main>{children}</main>
            <Footer social={social} />
        </div>
    )
}

Layout.propTypes = {}

export default Layout
