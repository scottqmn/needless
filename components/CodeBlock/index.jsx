import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import highlight from '../../utils/highlight'
// import styles from './styles.module.scss'

const Component = ({ children }) => {
    const codeRef = useRef(null)

    useEffect(() => {
        if (codeRef.current) {
            highlight.highlightElement(codeRef.current)
        }
    }, [codeRef])

    return (
        <pre>
            <code ref={codeRef}>{children}</code>
        </pre>
    )
}

Component.propTypes = { children: PropTypes.node }

export default Component
