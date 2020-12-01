/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import t from 'typy'
import { prismicImagePropType } from '../../types/prismic'

const PrismicImage = ({ content, ...props }) =>
  t(content, 'url').isDefined && (
    <img {...props} src={content.url} alt={content.alt} />
  )

PrismicImage.propTypes = { content: prismicImagePropType }

export default PrismicImage
