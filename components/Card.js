import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import Link  from 'next/link'
export default function Card({post}) {
    const {image, date, title, description} = post.frontmatter
    return (
        <div className={styles.card}>
        <Image src={image} alt="Dog sit" layout="responsive" width="165" height="110"/>
        <p className={styles.blogdate}>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/blog/${post.slug}`} passHref={true}>
        <button>Read more</button>
        </Link>
          </div>
    )
}
