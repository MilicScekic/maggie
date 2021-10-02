import styles from '@/styles/Main.module.css'
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright © 2021 <Link href="https://www.jamstackthemes.net"><a>jamstackthemes.net</a></Link>. All rights reserved.</p>
        </footer>
    )
}
