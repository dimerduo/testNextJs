'use client'

import { API_URL } from "@/utilites/constant";
import PostCard from "../PostCard/PostCard";
import { useState } from "react";

import { IPost } from "@/interfaces/Post"

const PostsList = ({
  posts,
  pageSize
}: {
  posts: Array<IPost>;
  pageSize: number
}) => {
  const [page, setPage] = useState(2)
  const [postList, setPostList] = useState(posts)
  const [showMoreBtn, setShowMoreBtn] = useState(true)

  async function getMorePosts() {
    const request = await fetch( 
      API_URL+`/posts?populate=leadImg&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      { cache: 'no-store' } 
    ) 
   
    if (!request.ok) {
      throw new Error('Failed to fetch posts data')
    }

    request.json().then((res) => {
      const newPostList = [...postList,...res.data]
      
      setPage((page) => page++)
      setPostList(newPostList)
      
      if(newPostList.length === res.meta.pagination.total){
        setShowMoreBtn(false)
      }
      
    })

  }  

  return(
    <>
      {postList.map((post: IPost, i: number) => <PostCard key={i} post={post} /> )}

      {showMoreBtn && <button onClick={() => getMorePosts()}>Read more</button>}
    </>
  )
} 

export default PostsList