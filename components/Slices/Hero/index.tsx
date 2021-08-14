import clsx from 'clsx'
import { Link, RichTextBlock } from 'prismic-reactjs'
import { Image, RichText } from '../../Prismic'
import styles from './styles.module.scss'

type Props = {
    background_image: Link
    description?: RichTextBlock
    title: RichTextBlock
}

const Hero: React.FC<Props> = ({ background_image, description, title }) => {
    return (
        <div className={clsx(styles.outer, 'section')}>
            <div className={styles.background}>
                <Image image={background_image} layout='fill' />
            </div>
            <div className={clsx(styles.inner, 'container t-rte')}>
                <RichText content={title} />
                {description ? (
                    <div className={styles.description}>
                        <RichText content={description} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Hero
