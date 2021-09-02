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
                <div className={styles.imageOuter}>
                    <div className={styles.imageInner}>
                        <Image
                            image={image}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className={styles.titles}>
                    <div className='t-rte'>
                        <RichText content={title} />
                    </div>
                    <div className='t-subtitle'>
                        <RichText content={subtitle} />
                    </div>
                </div>
            </div>
            <Slices body={body} />
        </div>
    )
}

export default Post
