import clsx from 'clsx'
import Slices from '../../components/Slices'
import { Image, RichText } from '../../components/Prismic'
import { Document } from '../../interfaces/prismic'
import styles from './styles.module.scss'

type Props = {
    document: Document
    preview: boolean
}

const Post: React.FC<Props> = ({ document, preview }) => {
    const { body, image, related, subtitle, title } = document.data

    return (
        <div>
            <div className={clsx(styles.intro, 'container')}>
                <div className='t-rte'>
                    <RichText content={title} />
                </div>
                <div className='t-subtitle'>
                    <RichText content={subtitle} />
                </div>
                <Image image={image} />
            </div>
            <Slices body={body} />
        </div>
    )
}

export default Post
