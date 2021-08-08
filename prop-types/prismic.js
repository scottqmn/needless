import PropTypes from 'prop-types'

export const prismicQueryPropType = PropTypes.shape({
    data: PropTypes.object,
})

export const prismicImagePropType = PropTypes.shape({
    dimensions: PropTypes.object,
    alt: PropTypes.string,
    url: PropTypes.string,
})

export const LinkPropType = PropTypes.shape({
    link_type: PropTypes.oneOf(['Web', 'Document', 'Media', 'Any']),
    target: PropTypes.string,
    url: PropTypes.string,
})

export const prismicRichTextPropType = PropTypes.arrayOf(
    PropTypes.shape({
        spans: PropTypes.array,
        text: PropTypes.string,
        type: PropTypes.string,
    })
)

export const prismicMediaPropType = PropTypes.shape({
    link_type: PropTypes.string,
    name: PropTypes.string,
    kind: PropTypes.string,
    url: PropTypes.string.isRequired,
    size: PropTypes.string,
})

export const prismicEmbedPropType = PropTypes.shape({
    html: PropTypes.string,
})

export const prismicSliceComponent = (props = {}) => {
    const { primary, items } = props
    return {
        primary: primary ? PropTypes.shape(primary) : PropTypes.object,
        items: items
            ? PropTypes.arrayOf(PropTypes.shape(items))
            : PropTypes.array,
    }
}
