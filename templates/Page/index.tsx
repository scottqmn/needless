import Slices from '../../components/Slices'
import { Document } from '../../interfaces/prismic'

type Props = {
    document: Document
    preview: boolean
}

const Page: React.FC<Props> = ({ document, preview }) => {
    return <Slices body={document.data.body} />
}

export default Page
