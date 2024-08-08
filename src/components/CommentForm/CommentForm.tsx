'use client'

import { useState } from "react"
import MDEditor from '@uiw/react-md-editor';
import { createComment } from "@/app/post/[id]/actions"

import styles from "./styles.module.sass"

const CommentForm = ({
  postID,
} : {
  postID: number; 
}) => {
  const [name, setName] = useState('')
  const [commentContent, setCommentContent] = useState('')

  return(
    <div className={styles.CommentForm}>
      <div className={styles.CommentFormTitle}>Leave a comment</div>
      <input 
        className={styles.Input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="You name"
      />
      <MDEditor
        className={styles.Editor}
        value={commentContent}
        //@ts-ignore // to much time to explore MDEditor types
        onChange={setCommentContent}   
        preview="edit"  
        textareaProps={{
          placeholder: 'You comment',
        }} 
      />
      <button
        className={styles.CommentButton}
        onClick={() => {
          setName('')
          setCommentContent('')
          createComment(postID, { name:name, content:commentContent })
        }}
      >
        Add comment
      </button>

    </div>
  )
}

export default CommentForm