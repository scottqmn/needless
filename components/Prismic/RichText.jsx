import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../prismic-configuration'
import { prismicRichTextPropType } from '../../types/prismic'

const PrismicRichText = ({ content }) => {
  // TODO: serialize custom links? https://prismic.io/docs/reactjs/rendering/rich-text
  return content ? (
    <RichText render={content} linkResolver={linkResolver} />
  ) : null
}

PrismicRichText.propTypes = {
  content: prismicRichTextPropType,
}

export default PrismicRichText
