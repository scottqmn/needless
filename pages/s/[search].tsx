import { GetServerSideProps } from 'next'
import { getSearchProps } from '../../utils/prismic'
import Search from '../../templates/Search'

export const getServerSideProps: GetServerSideProps = getSearchProps

export default Search
