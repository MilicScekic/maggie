import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import notfound from '../public/notfound.svg'

export default function NotFound() {
    return (
        <div className={styles.notfound}>
            <div className={styles.notfoundimage}>
            <Image src={notfound} alt="Lost dog" width="500" height="570"/>
            </div>
            <h1>Woof...</h1>
            <p>This page could not be found.</p>
            <p>Go back to <Link href="/"><a>Home</a></Link></p>
        </div>
    )
}
