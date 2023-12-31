import Image from "next/image";
import Logo from '../../public/Logo.svg'
import styles from './page.module.css'
import {Hero} from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import banner1 from '@Public/assets/banner1.jpg'
import {Banner} from "./Components/Banner/Banner";
export default function Home() {
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.logo_container}>
          <Image src={Logo} alt="Logo" fill priority={true} />
        </div>
      </nav>
      <main>
        <Hero/>
        <Services/>
        <Banner img={banner1} heading="Why renovate your home?" content="It would boost your homes value and lifestyle. Also elevate comfort, style and functionality
            explore trendy designs and increase resale potential. Unleash your Dream Home today!" />
      </main>
    </>

  )
}
