/* eslint-disable */
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }) => {
    return (
        <div className={styles.outer}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {}

export default Layout
