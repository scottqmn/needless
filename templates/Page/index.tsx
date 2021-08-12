import PageSlices from '../../components/PageSlices'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    preview: boolean
}

const Page: React.FC<Props> = ({ document, preview }) => {
    return <PageSlices body={document.data.body} />
}

export default Page
