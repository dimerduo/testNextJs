import styles from "./styles.module.sass"

const Container = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return(
    <div className={styles.Container}>
      {children}
    </div>
  )
}

export default Container