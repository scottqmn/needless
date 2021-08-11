import { GetStaticPaths, GetStaticProps } from 'next'
import { getCategoryProps, getDocumentPaths } from '../../utils/prismic'
import Category from '../../templates/Category'

export const getStaticProps: GetStaticProps = getCategoryProps

export const getStaticPaths: GetStaticPaths = getDocumentPaths('category')

export default Category
