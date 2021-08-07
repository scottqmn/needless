/* eslint-disable react/no-array-index-key */
import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

type Props = {
    title?: string
    alt?: string
}

const Logo: React.FC<Props> = ({
    title = 'need less info',
    alt = 'needless info',
}) => (
    <div className={clsx(styles.logo, 't-logo')} aria-label={alt || title}>
        {title.split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className={styles.row}>
                {word.split('').map((letter, letterIndex) => (
                    <span
                        key={`${wordIndex}-${letterIndex}`}
                        data-letter={letter}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        ))}
    </div>
)

export default Logo
