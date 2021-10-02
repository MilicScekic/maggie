import Layout from '@/components/Layout'
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import styles from '@/styles/Main.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from "@/config/index"
import { DiscussionEmbed } from 'disqus-react';

export default function slug({frontmatter: {title, description, category, author, image, date}, content, slug}) {
    return (
       <Layout title={"Maggie - " + title} description={description} keywords={category}>
           <div className={styles.post}>
           <div className={styles.postinfo}>
  <h1>{title}</h1>
  <Link href="./" passHref={true}><p>Back&gt;&gt;&gt;</p></Link>
  </div>
  <br />
  <div className={styles.postinfo}>
  <span><b>Author:</b> {author}</span><span className={styles.postdate}><b>Date:</b> {date}</span>
  </div>
  <div className={styles.postcontent}>
  <Image src={image} className={styles.heroimage} alt="Post image" width="458" height="498"/>
  <div dangerouslySetInnerHTML={{__html: marked(content)}}>
  </div>
  </div>
  <DiscussionEmbed
    shortname='maggie-4'
    config={
        {
            url: `${API_URL}/blog/${slug}`,
            identifier: `${title}`,
            title: `${title}`,
        }
    }
/>
  <p className={styles.posthelp}>Need help? <Link href='/contact' passHref={true}><b className={styles.pointer}>Contact Us!</b></Link></p> 
  </div>
       </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(file => ({
        params: {
            slug: file.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
    }

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const {data:frontmatter, content}= matter(markdownWithMeta)
    return {
        props: {
        frontmatter,
        content,
        slug
        }
    }
}
