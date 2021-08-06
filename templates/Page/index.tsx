import PageSlices from '../../components/PageSlices'
import { Document } from '../../interfaces/prismic'

type Props = {
    page: Document
    preview: boolean
}

const Page: React.FC<Props> = ({ page, preview }) => {
    console.log(page, preview)

    return <PageSlices body={page.data.body} />
}

export default Page
