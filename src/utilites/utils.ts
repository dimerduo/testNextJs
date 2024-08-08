import { IMediaImg } from "@/interfaces/MediaImg"

import { BACKEND_URL } from '@/utilites/constant'

import noImg from "@/../public/noImg.jpg"

export const getLeadImgUrls = (leadImg: IMediaImg) => {
  let img = ''
  let mImg = ''
  
  if(leadImg?.data === null){
    img = noImg.src // standart image placeholder
  } else {
    // @ts-ignore // if data !== null other fields always here
    const { 
      mainImg, 
      mobileImg, 
      thumbnail, 
    } = leadImg.data.attributes.formats
    
    //chouse best possible image for post image
    if(mainImg !== undefined) {
      img = BACKEND_URL + mainImg.url //strapi dont return domain :( 
    } else {
      img = BACKEND_URL + thumbnail.url //fallback to thumbnail image size
    }

    //chouse best possible image for mobile size
    if(mobileImg !== undefined) {
      mImg = BACKEND_URL + mobileImg.url
    } else {
      mImg = BACKEND_URL + thumbnail.url //fallback to thumbnail image size
    }
  }

  return {
    lead: img,
    mobile: mImg
  }
}