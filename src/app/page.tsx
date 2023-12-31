import Image from "next/image";
import Logo from '../../public/Logo.svg'
import styles from './page.module.css'
import {Hero} from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.logo_container}>
          <Image src={Logo} alt="Logo" fill priority={true} />
        </div>
      </nav>
      <main>
        <Hero></Hero>
      </main>
    </>

  )
}
