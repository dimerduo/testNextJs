'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { BACKEND_URL } from "@/utilites/constant";
import { ICommentAttributes } from "@/interfaces/Comment";

export const createComment = async (postID: number, { name, content }: ICommentAttributes): Promise<void>  => {
  
  const commentObj = {
    data: {
      name: name,
      content: content,
      post:{
        connect: [postID]
      }
    }
  }

  console.log('payload: ',JSON.stringify(commentObj));
  
  
  const responce = fetch(`${BACKEND_URL}/api/comments`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentObj)
  }).then((res) => {
    console.log("postID: ",postID);
    
    console.log(res);
    
    revalidatePath(`/post/${postID}`)
    redirect(`/post/${postID}`)
  }).catch((err) => {
    console.log(err)
  })

  return responce
}