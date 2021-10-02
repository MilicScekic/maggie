import Layout from '@/components/Layout'
import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import herodog from '../public/herodog.svg'
import aboutdog from '../public/aboutdog.svg'
import Card from '@/components/Card'
import React, { useRef } from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortDate } from 'utils'
import ContactForm from './ContactForm'

export default function Home({posts}) {
  const aboutRef = useRef(null)
  const blogRef = useRef(null)
  const scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})  
  }
  return (
   <Layout>
     <section className={styles.hero}>
       <div className={styles.herocontainer}>
         <div className={styles.herocontent}>
<h1>Take care of your dog with our guidelines!</h1>
<h2>Maggie is a place where you can find all the latest guidelines that can help you to take care of your dog in the best possible way.</h2>
<button onClick={() => scroll(aboutRef)}>Read more</button>
         </div>
<Image src={herodog} className={styles.heroimage} alt="Hero dog" width="458" height="498"/>
       </div>
     </section>
<section ref={aboutRef} className={styles.about}>
  <div className={styles.aboutimage}><Image src={aboutdog} alt="About dog" height="750" width="500"/></div>
  <div className={styles.aboutcontent}>
  <h1>We are here to help you with your Dog</h1>
<p>Need little help with your dog? We are here for you. With our guidelines, you will in no time learn your dog how to sit, poop outside, take bath, and do many other important things that will make your life easier.</p>
<button className={styles.button} onClick={() => scroll(blogRef)}>Read more</button>
  </div>
</section>
     <section ref={blogRef} className={styles.blog}>
<h1>Our Blog</h1>
<p>Find the latest guidelines for your dog</p>
     <div className={styles.blogcontent}>
     {posts.map((post, index) => <Card key={index} post={post}/>
      )}
 </div>
 <Link href='/blog' passHref={true}><button className={styles.button}>View All Posts</button></Link>
     </section>
  <ContactForm/>
   </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortDate).slice(0, 3)
    },
  }
}
