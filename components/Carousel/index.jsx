/* eslint-disable */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from './styles.module.scss'

const Carousel = ({ slides, hideDots }) => {
    const [carouselRef, carousel] = useEmblaCarousel({
        align: 'center',
        loop: true,
    })
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        carousel?.on('select', () =>
            setActiveSlide(carousel.selectedScrollSnap())
        )
    }, [carousel])

    if (slides.length > 1) {
        return (
            <>
                <div ref={carouselRef} className={styles.outer}>
                    <div className={styles.inner}>
                        {slides.map(({ id, node }) => (
                            <div key={id} className={styles.slide}>
                                {node}
                            </div>
                        ))}
                    </div>
                </div>
                {!hideDots && (
                    <div className={styles.dots}>
                        {slides.map(({ id }, index) => {
                            const isActive = activeSlide === index
                            return (
                                <button
                                    key={id}
                                    type='button'
                                    className={clsx(
                                        styles.dot,
                                        isActive && styles.isActive
                                    )}
                                    onClick={() => carousel.scrollTo(index)}
                                    aria-label={`Go to slide ${index}`}
                                />
                            )
                        })}
                    </div>
                )}
            </>
        )
    }

    if (slides.length === 1) {
        return slides[0].node
    }

    return <div></div>
}

Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.any.isRequired,
            node: PropTypes.node.isRequired,
        })
    ),
    hideDots: PropTypes.bool,
}

export default Carousel
