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

export const fetchLinks = {}

export const linkResolver = (doc) => {
    switch (doc.type) {
        case 'page':
            return doc.uid === indexUID ? '/' : `/${doc.uid}`
        case 'menu_page':
            return '/menu'
        case 'menu_item':
            return `/menu/${doc.uid}`
        default:
            // eslint-disable-next-line no-console
            console.warn('no linkResolver case:', doc)
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
