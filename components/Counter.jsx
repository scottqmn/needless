/* eslint-disable no-console */
import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/Counter.module.scss'

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div
      className={clsx(
        styles.container,
        count % 2 ? styles.containerOdd : styles.containerEven
      )}
    >
      <p className={styles.display}>Count: {count}</p>
      <button
        type='button'
        className={styles.button}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number,
}

export default Counter
