import clsx from 'clsx'
import { RichText } from '../../Prismic'
import { RichTextContent } from '../../../interfaces/prismic'
import styles from './styles.module.scss'

type Props = {
    primary: {
        heading: RichTextContent[]
        label?: string
    }
}

const Heading: React.FC<Props> = ({ primary }) => {
    const { heading, label } = primary

    return (
        <div className={clsx(styles.outer, 'section')}>
            <div className='container'>
                <div className='t-rte'>
                    <RichText content={heading} />
                </div>
                {label ? (
                    <div className={clsx(styles.label, 't-subtitle')}>
                        {label}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Heading
