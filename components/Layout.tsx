import styles from '../styles/components/Layout.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
