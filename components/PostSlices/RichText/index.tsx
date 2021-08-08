import clsx from 'clsx'
import { RichText } from '../../Prismic'

const RichTextSlice: React.FC = ({ primary }) => {
    return (
        <div className={clsx('container', 'rte')}>
            <RichText content={primary.content} />
        </div>
    )
}

export default RichTextSlice
