/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css'
import '../styles/index.scss'
import Layout from '../components/Layout'
import Metadata from '../components/Metadata'
import * as gtag from '../utils/gtag'
import { getAppProps } from '../utils/prismic'

// NProgress
Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeError', NProgress.done)

// Google Analytics pageview
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function App({ Component, appProps, pageProps }) {
    const { navigation, social, ...metaProps } = appProps?.global?.data || {}

    return (
        <>
            <Metadata {...metaProps} />
            <Layout navigation={navigation} social={social}>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

App.getInitialProps = getAppProps

export default App
