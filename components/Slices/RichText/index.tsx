import clsx from 'clsx'
import { RichText } from '../../Prismic'
import { RichTextContent } from '../../../interfaces/prismic'

type Props = {
    content: RichTextContent[]
}

const RichTextSlice: React.FC<Props> = ({ content }) => {
    return (
        <div className={clsx('container', 't-rte')}>
            <RichText content={content} />
        </div>
    )
}

export default RichTextSlice
