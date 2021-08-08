/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import NextImage from 'next/image'
import { prismicImagePropType } from '../../../prop-types/prismic'

const Image = ({
    image,
    layout = 'intrinsic',
    objectFit = 'cover',
    ...props
}) => {
    if (image.url && !image.alt) {
        console.warn('Missing alt for image:', image)
    }

    const dimensions = layout !== 'fill' && image.dimensions

    return image?.url ? (
        <NextImage
            {...props}
            {...dimensions}
            src={image.url}
            alt={image.alt}
            layout={layout}
            objectFit={objectFit}
        />
    ) : null
}

Image.propTypes = {
    image: prismicImagePropType,
    layout: PropTypes.oneOf(['fixed', 'intrinsic', 'responsive', 'fill']),
    objectFit: PropTypes.oneOf([
        'contain',
        'cover',
        'fill',
        'none',
        'scale-down',
    ]),
}

export default Image
