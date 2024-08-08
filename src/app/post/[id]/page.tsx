import { Suspense } from 'react'
import { randomUUID } from 'crypto'
import Markdown from 'react-markdown';

import { API_URL } from "@/utilites/constant"
import { getLeadImgUrls } from '@/utilites/utils';

import PageHeader from "@/components/PageHeader/PageHeader";
import CommentForm from '@/components/CommentForm/CommentForm';

import { IComment } from '@/interfaces/Comment';

import styles from "./page.module.sass";

async function getData(id: number) {
  const res = await fetch( 
    API_URL+`/posts/${id}?populate[0]=leadImg&populate[1]=comments`,
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
  
  const { 
    title, 
    content, 
    publishedAt, 
    leadImg, 
    comments 
  } = post.attributes  

  let imgAlt = leadImg.data.attributes.alternativeText

  const renderComments = (comments: Array<IComment>) => {
    return comments.map( (comment: IComment, i: number) => {
      const { name, content } = comment.attributes

      const uuid = randomUUID()

      return(
        <div key={i} className={styles.CommentBody}>
          <div className={styles.CommentName}>
            <div className={styles.imgWrp}>
              <picture>
                <source
                  srcSet={`https://i.pravatar.cc/48?u=${uuid}`} 
                  media='(max-width: 620px)'
                />

                <img 
                  src={`https://i.pravatar.cc/64?u=${uuid}`} 
                  className={styles.CommentAvatar} 
                  alt='avatar'
                />
              </picture>
            </div>
            {name}
          </div>
          <div className={styles.CommentContent}>
            <Markdown>
              {content}
            </Markdown>
          </div>
        </div>
      )
    })
  }  

  return (
    <article className={styles.SinglePost}>
      <div className={styles.LeadImg}>
        <picture>
          <source
            srcSet={getLeadImgUrls(leadImg).mobile} 
            media='(max-width: 620px)'
          />
          <img src={getLeadImgUrls(leadImg).lead} alt={imgAlt} />
        </picture>
      </div>
      <PageHeader>
        {title} 
        <small className={styles.Time}>
          {new Date(publishedAt).toLocaleString()}
        </small>
      </PageHeader>
      <div className={styles.ContentWrp}>
        <Markdown>{content}</Markdown>
      </div>
      <div className={styles.CommentsWrp}>
        {renderComments(comments.data)}
      </div>
      <Suspense fallback={"Loading comment form...."}>
        <CommentForm postID={postID}/>
      </Suspense>
    </article>
  );
}