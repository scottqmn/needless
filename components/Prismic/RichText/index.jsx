/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { RichText, Elements } from 'prismic-reactjs'
import Image from '../Image'
import CodeBlock from '../../CodeBlock'
import { linkResolver } from '../../../utils/prismic'
// import { prismicRichTextPropType } from '../../../prop-types/prismic'

const propsWithUniqueKey = (props, key) => {
    return Object.assign(props || {}, { key })
}

// For more examples:
// https://prismic.io/docs/technologies/html-serializer-reactjs#example-with-all-elements

const htmlSerializer = (type, element, content, children, key) => {
    let props = {}

    switch (type) {
        // Use next/link for internal links
        case Elements.hyperlink: {
            const isInternal = !element.data.url

            if (isInternal) {
                return (
                    <Link key={key} href={linkResolver(element.data)}>
                        <a>{children}</a>
                    </Link>
                )
            }

            const targetAttr = element.data.target
                ? { target: element.data.target }
                : {}
            const relAttr = element.data.target ? { rel: 'noopener' } : {}

            props = {
                href: element.data.url,
                ...targetAttr,
                ...relAttr,
            }

            return React.createElement(
                'a',
                propsWithUniqueKey(props, key),
                children
            )
        }

        // use next/image for images
        case Elements.image:
            return (
                <Image
                    key={key}
                    className='block-img'
                    image={element}
                    objectFit='contain'
                />
            )

        // preformatted uses code highlighting
        case Elements.preformatted:
            return <CodeBlock key={key}>{element.text}</CodeBlock>

        // Return null to stick with the default behavior
        default:
            return null
    }
}

const PrismicRichText = ({ content, asText }) => {
    if (!content) {
        return null
    }

    if (asText) {
        return <>{RichText.asText(content)}</>
    }

    return (
        <RichText
            render={content}
            linkResolver={linkResolver}
            htmlSerializer={htmlSerializer}
        />
    )
}

PrismicRichText.propTypes = {
    // content: prismicRichTextPropType,
    content: PropTypes.any,
    asText: PropTypes.bool,
}

export default PrismicRichText
