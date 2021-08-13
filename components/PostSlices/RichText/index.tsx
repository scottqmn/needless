import clsx from 'clsx'
import { RichText } from '../../Prismic'

// TODO: refine
type Props = {
    primary: any
}

const RichTextSlice: React.FC<Props> = ({ primary }) => {
    return (
        <div className={clsx('container', 't-rte')}>
            <RichText content={primary.content} />
        </div>
    )
}

export default RichTextSlice
