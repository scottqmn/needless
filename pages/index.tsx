import { GetStaticProps } from 'next'
import { Client } from '../utils/prismic'
import Page from '../templates/Page'

export const INDEX_UID = process.env.PRISMIC_INDEX_UID

export const getStaticProps: GetStaticProps = async (context) => {
    const { preview = null, previewData = {} } = context

    const queryOptions: Record<string, string | number | string[]> = {
        fetchLinks: [],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const page = await Client().getByUID('page', INDEX_UID, queryOptions)

    return {
        props: { page, preview },
    }
}

const Component = Page

export default Component
