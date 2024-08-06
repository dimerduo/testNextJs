import Image from "next/image"
import Link from "next/link"

import styles from "./styles.module.sass"
import Container from "../Container/Container"
import logo from "@/../public/next.svg"

const Header = () => {
  return(
    <header className={styles.Header}>
      <Container>
        <div className={styles.Logo}>
          <Link href="/">
            <Image src={logo} alt="Test nextjs app"/>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header