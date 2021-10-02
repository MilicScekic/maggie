import Layout from "@/components/Layout"
import aboutdog from '../public/aboutusdog.svg'
import styles from '@/styles/Main.module.css'
import Image from 'next/image'


export default function About() {
    return (
        <Layout title="Maggie - About Us">
         <section className={styles.aboutus}>
             <div className={styles.aboutcontent}>
                <h1>About Us</h1>
                <p className={styles.aboutustext}>Maggie is an extraordinarily fast and easy-to-use blog website where you can find guidelines that can help you in training your dog. If there is any extra assistance that guidelines dont provide feel free to contact us and we will try to answer as fast as possible.</p>
                <br />
                <h2>Our GOAL</h2>
                <p className={styles.aboutustext}>Our main goal is to find a home for every dog because there is no home without a lovely dog. We encourage adoption and with our guidelines, we try to help people to train their dogs.</p>
             </div>
         <div className={styles.aboutusimage}><Image src={aboutdog} alt="About dog" layout="responsive" height="400" width="300"/></div>
         <br />
         </section>
        </Layout>
    )
}
