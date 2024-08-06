import { Suspense } from 'react'
import { API_URL } from "@/utilites/constant"

import PostCard from "@/components/PostCard/PostCard"
import PageHeader from "@/components/PageHeader";

import { IPost } from '@/interfaces/Post';

import styles from "./page.module.sass";

async function getData() {
  const res = await fetch( 
    API_URL+`/posts?populate=leadImg`,
    { next: {revalidate: 600 }} //10 min for testing
  ) 
 
  if (!res.ok) {
    throw new Error('Failed to fetch posts data')
  }
 
  return res.json()
}

export default async function Home() {

  const { data: posts } = await getData()  

  return (
    <main className={styles.Home}>
      <div className={styles.h1}>
        <PageHeader>Blog home page</PageHeader>
      </div>
      <div className={styles.Home__cardsWrp}>
        <Suspense fallback={'loading...'}>
          {posts.map((post: IPost, i: number) => <PostCard key={i} post={post} /> )}
        </Suspense>

      </div>
    </main>
  );
}
