import styles from "./styles.module.sass"

const PageHeader = ({
  children 
} : {
  children: React.ReactNode
}) => {
  return (
    <h1 className={styles.H1}>{children}</h1>
  )
}

export default PageHeader

