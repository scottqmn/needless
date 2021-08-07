import Prismic from '@prismicio/client'

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN
export const indexUID = process.env.PRISMIC_INDEX_UID

export const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

export const { Predicates } = Prismic

export const fetchLinks = { post: [] }

export const linkResolver = (doc) => {
    switch (doc.type) {
        case 'page':
            return `/page/${doc.uid}`
        case 'post':
            return `/post/${doc.uid}`
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

export const getPageProps = async (context) => {
    const { req, params = {}, preview = null, previewData = {} } = context
    const { uid } = params

    const queryOptions = {
        fetchLinks: [...fetchLinks.menu_item, ...fetchLinks.schedule],
    }

    if (previewData.ref) {
        queryOptions.ref = previewData.ref
    }

    const pageRes = await Client(req).getByUID(
        'page',
        uid || indexUID,
        queryOptions
    )

    const prismicData = {
        page: pageRes,
    }

    return {
        props: { prismicData, preview },
    }
}

export const getPageUIDPaths = async () => {
    const pageRes = await Client().query([
        Predicates.at('document.type', 'page'),
    ])

    const uidPaths =
        pageRes.results
            ?.filter(({ uid }) => uid !== indexUID)
            .map(({ uid }) => {
                return { params: { uid } }
            }) || []

    return {
        paths: uidPaths,
        fallback: false,
    }
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

    const posts = await Client().query([Predicates.at('document.type', 'post')])

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
        Predicates.at('document.type', docType),
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
        [Predicates.at('document.type', 'post')],
        options
    )

    return { props: { posts } }
}
