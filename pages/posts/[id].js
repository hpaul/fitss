import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

import styles from "../../styles/Post.module.css"

export default function Post({ details }) {
  return (
    <Layout>
      <Head>
      <title>Paul H. - {details.title}</title>
      </Head>


      <div className={styles.content}>
        <h2 className={styles.title}>{details.title}</h2>
        
        <div dangerouslySetInnerHTML={{ __html: details.contentHtml }} />
      </div>
    </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const details = await getPostData(params.id)
  return {
    props: {
      details
    }
  }
}
