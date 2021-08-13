import clsx from 'clsx'
import { RichText } from '../../Prismic'
import { RichTextContent } from '../../../interfaces/prismic'

type Props = {
    primary: {
        content: RichTextContent[]
    }
}

const RichTextSlice: React.FC<Props> = ({ primary }) => {
    return (
        <div className={clsx('container', 't-rte')}>
            <RichText content={primary.content} />
        </div>
    )
}

export default RichTextSlice
