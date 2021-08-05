/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { linkResolver } from '../../../utils/prismic'
import { prismicLinkPropType } from '../../../prop-types/prismic'

const PrismicLink = ({ children, link = {}, ...props }) => {
    // Handle out/Prismic links
    const { link_type, target, url } = link
    switch (link_type) {
        case 'Media':
        case 'Web':
            return (
                <a
                    href={url}
                    target={target}
                    rel='noopener noreferrer'
                    {...props}
                >
                    {children}
                </a>
            )
        case 'Document': {
            return (
                <NextLink href={linkResolver(link)}>
                    <a {...props}>{children}</a>
                </NextLink>
            )
        }
        case 'Any':
        default:
        // eslint-disable-next-line no-console
        // console.warn('No link provided')
    }

    return <span {...props}>{children}</span>
}

PrismicLink.propTypes = {
    children: PropTypes.node,
    link: prismicLinkPropType,
}

export default PrismicLink
