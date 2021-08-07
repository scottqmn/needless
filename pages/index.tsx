import { GetStaticProps } from 'next'
import { getHomepageProps } from '../utils/prismic'
import Homepage from '../templates/Homepage'

export const getStaticProps: GetStaticProps = getHomepageProps

export default Homepage
