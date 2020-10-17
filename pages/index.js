import Head from 'next/head'
import Link from "next/link"
import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Paul Hrimiuc</title>
      </Head>

      <h2 className={styles.blogTitle}>
        Articles
      </h2>

      <div className={styles.grid}>
        {allPostsData.map((item) => (
          <Link href={`/posts/${item.id}`} as={`/posts/${item.id}`}>
            <a className={styles.card}>
              <h3>{item.title} &rarr;</h3>
              <p>{item.excerpt}</p>
            </a>
          </Link>
        ))}

        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}