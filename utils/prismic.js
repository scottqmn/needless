import Prismic from '@prismicio/client'
import pageType from '../constants/prismic/page.json'
import postType from '../constants/prismic/post.json'

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// Client method to query documents from the Prismic repo
export const Client = (req = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = accessToken ? { accessToken } : {}
    return Prismic.client(apiEndpoint, {
        ...reqOption,
        ...accessTokenOption,
    })
}

const IGNORE_FIELDS = ['uid', 'body']

const createFetchLinks = (name, type) =>
    Object.keys(type.Main)
        .filter((field) => !IGNORE_FIELDS.includes(field))
        .map((field) => `${name}.${field}`)

export const fetchLinks = {
    page: createFetchLinks('page', pageType),
    post: createFetchLinks('post', postType),
}

export const getPosts = async (context) => {
    const { req } = context

    const options = {
        fetchLinks: [...fetchLinks.post],
        orderings: '[document.first_publication_date desc]',
    }

    const posts = await Client(req).query(
        [Prismic.Predicates.at('document.type', 'post')],
        options
    )

    return posts
}

export const getAppProps = async (context) => {
    const { req } = context

    const global = await Client(req).getSingle('global')

    return { appProps: { global } }
}

export const getHomepageProps = async (context) => {
    const { req, preview = null, previewData = {} } = context

    const queryOptions = {
        fetchLinks: [...fetchLinks.post],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const document = await Client(req).getSingle('homepage', queryOptions)

    const posts = await getPosts(context)

    return {
        props: { document, posts, preview },
    }
}

export const getDocumentProps = (docType) => async (context) => {
    const { req, params = {}, preview = null, previewData = {} } = context
    const { uid } = params

    const queryOptions = {
        fetchLinks: [...fetchLinks.post],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const document = await Client(req).getByUID(docType, uid, queryOptions)

    return {
        props: { document, preview },
    }
}

export const getDocumentPaths = (docType, param = 'uid') => async () => {
    const documents = await Client().query([
        Prismic.Predicates.at('document.type', docType),
    ])

    const paths =
        documents.results.map(({ uid }) => ({ params: { [param]: uid } })) || []

    return {
        paths,
        fallback: false,
    }
}

export const getCategoryProps = async (context) => {
    const { req, params = {}, preview = null, previewData = {} } = context
    const { uid } = params

    const queryOptions = {
        fetchLinks: [...fetchLinks.post],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const document = await Client(req).getByUID('category', uid, queryOptions)

    const { id: categoryId } = document

    const posts = categoryId
        ? await Client().query([
              Prismic.Predicates.at('document.type', 'post'),
              Prismic.Predicates.at('my.post.category', categoryId),
          ])
        : []

    return {
        props: { document, posts, preview },
    }
}

export const getSearchProps = async (context) => {
    const { params = {}, req } = context

    const { query } = params

    const options = {
        fetchLinks: [...fetchLinks.post],
    }

    const response =
        (await Client(req).query(
            [
                Prismic.Predicates.any('document.type', [
                    'post',
                    'category',
                    'page',
                ]),
                Prismic.Predicates.fulltext('document', query),
            ],
            options
        )) || []

    return { props: { query, search: response } }
}

export const linkResolver = (doc) => {
    switch (doc.type) {
        case 'homepage':
            return '/'
        case 'category':
            return `/c/${doc.uid}`
        case 'page':
            return `/p/${doc.uid}`
        case 'post':
            return `/${doc.uid}`
        default:
            // eslint-disable-next-line no-console
            console.warn('No linkResolver case:', doc)
    }

    // Backup for all other types
    return '/'
}

export const isEmptyLink = (link) => {
    return !link?.link_type || link.link_type === 'Any'
}
