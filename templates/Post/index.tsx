// import PageSlices from '../../components/PageSlices'
import { Document } from '../../interfaces/prismic'

type Props = {
    post: Document
    preview: boolean
}

const Page: React.FC<Props> = ({ post, preview }) => {
    console.log(post, preview)

    return <div>post</div>
}

export default Page
