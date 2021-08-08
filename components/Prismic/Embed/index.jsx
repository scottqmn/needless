/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import { prismicEmbedPropType } from '../../../prop-types/prismic'

const Embed = ({ content, ...props }) => {
    if (!content.html) {
        console.warn('Invalid embed', content)
    }

    return content.html ? (
        <div dangerouslySetInnerHTML={{ __html: content.html }} {...props} />
    ) : null
}

Embed.propTypes = {
    content: prismicEmbedPropType,
}

export default Embed
