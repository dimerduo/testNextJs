import Markdown from 'react-markdown'
import Link from 'next/link'
import { IPostCardProps } from '@/interfaces/PostCard'

import { BACKEND_URL } from '@/utilites/constant'

import styles from "./styles.module.sass"
import noImg from "@/../public/noImg.jpg"

const PostCard = (props:IPostCardProps) => {
  const { post } = props
  const { id } = post
  const { title, shortCaption, leadImg } = post.attributes

  let img = ''

  if(leadImg?.data === null){
    img = noImg.src // standart image placeholder
  } else {
    //@ts-ignore // if data !== null other fields always here
    const { postCard, thumbnail } = leadImg.data.attributes.formats

    //chouse best possible image for preview
    if(postCard !== undefined) {
      img = BACKEND_URL + postCard.url //strapi dont return domain :( 
    } else {
      img = BACKEND_URL + thumbnail.url //fallback to thumbnail image size
    }
  }

  return(
    <div className={styles.PostCard}>
      <div className={styles.Image}>
        <Link href={`/post/${id}`}>
          <img src={img}/>
        </Link>
      </div>
      <div className={styles.Content}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.ShortCaption}>
          <Markdown>{shortCaption}</Markdown>
        </div>
        <div className={styles.BottomContainer}>
          <Link className={styles.BottomButton} href={`/post/${id}`} >See more</Link>
        </div>
      </div>
    </div>
  )
} 

export default PostCard