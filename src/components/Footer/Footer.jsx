import styles from "./styles.module.sass"
import Container from "../Container/Container"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return(
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.Footer__text}> Dimer @ {currentYear} </div>
      </Container>
    </footer>
  )
}

export default Footer