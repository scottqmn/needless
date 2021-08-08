import PostSlices from '../../components/PostSlices'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    preview: boolean
}

const Post: React.FC<Props> = ({ document, preview }) => {
    console.log(document, preview)

    return <PostSlices body={document.data.body} />
}

export default Post
