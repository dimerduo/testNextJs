import { Suspense } from 'react'
import { API_URL } from "@/utilites/constant"

import PostsList from "@/components/PostsList/PostsList"
import PageHeader from "@/components/PageHeader/PageHeader";

import styles from "./page.module.sass";
import { Metadata, Viewport } from 'next';

const PAGE_SIZE = 5

async function getData() {

  const res = await fetch( 
    API_URL+`/posts?populate=leadImg&pagination[pageSize]=${PAGE_SIZE}`,
    { next: {revalidate: 60 }} //1 min for testing
  ) 
 
  if (!res.ok) {
    throw new Error('Failed to fetch posts data')
  }
 
  return res.json()
}

export const metadata: Metadata = {
  title: 'Test blog app',
  description: 'created by DimeR',
}

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function Home() {

  const { data: posts } = await getData()  

  return (
    <main className={styles.Home}>
      <div className={styles.h1}>
        <PageHeader>Blog home page</PageHeader>
      </div>
      <div className={styles.Home__cardsWrp}>
        <Suspense fallback={'loading posts...'}>
          <PostsList posts={posts} pageSize={PAGE_SIZE} />
        </Suspense>

      </div>
    </main>
  );
}
