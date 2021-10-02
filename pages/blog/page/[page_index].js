import Layout from "@/components/Layout"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from "@/components/Card"
import styles from '@/styles/Main.module.css'
import { sortDate } from 'utils'

export default function BlogPage({posts}) {
  return (
    <Layout title="Maggie - Blog">
     <section className={styles.posts}>
     <h1>Blog</h1>  
     <div className={styles.postscontent}>       
      {posts.map((post, index) => <Card key={index} post={post}/>
      )}
      </div>
      <br />
   </section>
    </Layout>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const numPages = Math.ceil(files.length)
    let paths = []
    for(let i = 1; i <= numPages; i++) {
        paths.push({
            params: {page_index: i.toString()}
        })
    }
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
   const page = parseInt((params && params.page_index || 1))
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
      posts: posts.sort(sortDate)
    },
  }
}