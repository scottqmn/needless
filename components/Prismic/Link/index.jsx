/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { linkResolver } from '../../../utils/prismic'
import { LinkPropType } from '../../../prop-types/prismic'

const Link = ({ children, document, link, ...props }) => {
    if (document) {
        return (
            <NextLink href={linkResolver(document)}>
                <a {...props}>{children}</a>
            </NextLink>
        )
    }

    if (link) {
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
        }
    }

    return <span {...props}>{children}</span>
}

Link.propTypes = {
    children: PropTypes.node,
    link: LinkPropType,
    document: PropTypes.object, // TODO: refine
}

export default Link
