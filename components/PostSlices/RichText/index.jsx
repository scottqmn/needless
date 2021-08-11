import clsx from 'clsx'
import { RichText } from '../../Prismic'

const RichTextSlice = ({ primary }) => {
    return (
        <div className={clsx('container', 't-rte')}>
            <RichText content={primary.content} />
        </div>
    )
}

export default RichTextSlice
