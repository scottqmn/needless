import PropTypes from 'prop-types'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './styles.module.scss'

const PreviewAlert = ({ preview }) => {
    return preview ? (
        <Link className={clsx(styles.wrap, 't-label')} href='/api/exit-preview'>
            Exit Preview
        </Link>
    ) : null
}

PreviewAlert.propTypes = {
    preview: PropTypes.bool,
}

export default PreviewAlert
