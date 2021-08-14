import { useMemo } from 'react'
import { Link } from 'prismic-reactjs'
import clsx from 'clsx'
import Carousel from '../../Carousel'
import { Image } from '../../Prismic'
import styles from './styles.module.scss'

type Props = {
    items: { caption?: string; image: Link }[]
}

const Images: React.FC<Props> = ({ items }) => {
    const slides = useMemo(() => {
        return items.map(({ caption, image }) => {
            return {
                id: image?.url || caption,
                node: (
                    <div className={styles.slide}>
                        <Image image={image} />
                    </div>
                ),
            }
        })
    }, [items])

    return (
        <div className={clsx(styles.outer, 'container')}>
            <div className={styles.inner}>
                <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default Images
