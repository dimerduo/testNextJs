import Markdown from 'react-markdown'
import Link from 'next/link'
import { IPostCardProps } from '@/interfaces/PostCard'

import { BACKEND_URL } from '@/utilites/constant'

import styles from "./styles.module.sass"
import noImg from "@/../public/noImg.jpg"
import { getLeadImgUrls } from '@/utilites/utils'

const PostCard = (props:IPostCardProps) => {
  const { post } = props
  const { id } = post
  const { title, shortCaption, leadImg } = post.attributes
  
  return(
    <div className={styles.PostCard}>
      <div className={styles.Image}>
        <Link href={`/post/${id}`}>
          <img src={getLeadImgUrls(leadImg).postCard}/>
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