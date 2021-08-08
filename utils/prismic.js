import Prismic from '@prismicio/client'

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN
export const indexUID = process.env.PRISMIC_INDEX_UID

// Client method to query documents from the Prismic repo
export const Client = (req = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = accessToken ? { accessToken } : {}
    return Prismic.client(apiEndpoint, {
        ...reqOption,
        ...accessTokenOption,
    })
}

export const fetchLinks = { post: [] }

export const getHomepageProps = async (context) => {
    const { req, preview = null, previewData = {} } = context

    const queryOptions = {
        fetchLinks: [...fetchLinks.post],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const document = await Client(req).getSingle('homepage', queryOptions)

    const posts = await Client().query([
        Prismic.Predicates.at('document.type', 'post'),
    ])

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

    const document = await Client(req).getByUID(
        docType,
        uid || indexUID,
        queryOptions
    )

    return {
        props: { document, preview },
    }
}

export const getDocumentPaths = (docType) => async () => {
    const documents = await Client().query([
        Prismic.Predicates.at('document.type', docType),
    ])

    const paths =
        documents.results.map(({ uid }) => ({ params: { uid } })) || []

    return {
        paths,
        fallback: false,
    }
}

export const getPosts = async (context) => {
    const { req } = context

    const options = {
        fetchLinks: [...fetchLinks.post],
    }

    const posts = await Client(req).query(
        [Prismic.Predicates.at('document.type', 'post')],
        options
    )

    return { props: { posts } }
}

export const linkResolver = (doc) => {
    switch (doc.type) {
        case 'homepage':
            return '/'
        case 'page':
            return `/${doc.uid}`
        case 'post':
            return `/p/${doc.uid}`
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
