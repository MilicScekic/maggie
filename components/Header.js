import styles from "@/styles/Header.module.css"
import Link from 'next/link'
import { useState, useEffect } from "react";
export default function Header() {
    const [navbar, setNavbar] = useState(false);
      useEffect(() => {
        const onScroll = () => setNavbar(window.scrollY > 100)
        document.addEventListener("scroll", onScroll)
        return () => {
          document.removeEventListener("scroll", onScroll)
        }
      }, [])
    return (
        <header className={navbar ? styles.headeractive : styles.header}>
            <div className={styles.headercontent}>
            <h3><Link href='/'><a className={styles.logo}>Maggie</a></Link></h3>
          <nav>
              <ul>
                  <li><Link href='/'><a>Home</a></Link></li>
                  <li> <Link href='/about'><a>About Us</a></Link></li>
                  <li> <Link href='/blog'><a>Blog</a></Link></li>
              </ul>
          </nav>
          <Link className={styles.buttontext} href='/contact' passHref={true}><button>Contact Us</button></Link>
            </div>
        </header>
    )
}
