import { GetStaticPaths, GetStaticProps } from 'next'
import { getDocumentProps, getDocumentPaths } from '../../utils/prismic'
import Page from '../../templates/Page'

export const getStaticProps: GetStaticProps = getDocumentProps('page')

export const getStaticPaths: GetStaticPaths = getDocumentPaths('page')

export default Page
