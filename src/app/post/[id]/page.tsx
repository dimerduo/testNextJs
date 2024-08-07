import { Suspense } from 'react'
import Markdown from 'react-markdown';

import { API_URL } from "@/utilites/constant"
import { BACKEND_URL } from '@/utilites/constant'

import PageHeader from "@/components/PageHeader";

import styles from "./page.module.sass";
import noImg from "@/../public/noImg.jpg"

async function getData(id: number) {
  const res = await fetch( 
    API_URL+`/posts/${id}?populate=leadImg`,
    { next: {revalidate: 600 }} //10 min for testing
  ) 
 
  if (!res.ok) {
    throw new Error('Failed to fetch posts data')
  }
 
  return res.json()
}

export default async function SinglePost({
  params
} : {
  params: { id: number }
} ) {
  const { id: postID } = params

  const { data: post } = await getData(postID)
  
  const { title, content, publishedAt, leadImg } = post.attributes

  let img = ''

  if(leadImg?.data === null){
    img = noImg.src // standart image placeholder
  } else {
    // @ts-ignore // if data !== null other fields always here
    const { mainImg = undefined, thumbnail } = leadImg.data.attributes.formats

    //chouse best possible image for post image
    if(mainImg !== undefined) {
      img = BACKEND_URL + mainImg.url //strapi dont return domain :( 
    } else {
      img = BACKEND_URL + thumbnail.url //fallback to thumbnail image size
    }
  }

  return (
    <article className={styles.SinglePost}>
      <div className={styles.LeadImg}>
        <img src={img} alt='' />
      </div>
      <PageHeader>{title} <span>{publishedAt}</span></PageHeader>
      <div className={styles.ContentWrp}>
        <Markdown>{content}</Markdown>
      </div>
      comments
    </article>
  );
}