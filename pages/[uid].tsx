import { GetStaticPaths, GetStaticProps } from 'next'
import { getDocumentProps, getDocumentPaths } from '../utils/prismic'
import Post from '../templates/Post'

export const getStaticProps: GetStaticProps = getDocumentProps('post')

export const getStaticPaths: GetStaticPaths = getDocumentPaths('post')

export default Post
