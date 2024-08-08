import { IMediaImg } from "@/interfaces/MediaImg"

import { BACKEND_URL } from '@/utilites/constant'

import noImg from "@/../public/noImg.jpg"

export const getLeadImgUrls = (leadImg: IMediaImg | undefined) => {
  let img = ''
  let mImg = ''
  let cardImg = ''
  let thumbImg = ''
  
  if(leadImg !== undefined && leadImg?.data === null){
    img = noImg.src // standart no-image placeholder
    cardImg = noImg.src //no-image placeholder for post card in home page
    thumbImg = noImg.src
  } else {
    const { 
      mainImg, 
      mobileImg, 
      thumbnail,
      postCard, 
    // @ts-ignore // if data !== null other fields always here
    } = leadImg.data.attributes.formats

    thumbImg = thumbnail.url

    //strapi does not generate larger image for uploaded image, in this case we fallbac to thumbnail image, thaths alwayse exists 
    
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

    //chouse best possible image for post card
    if(postCard !== undefined) {
      cardImg = BACKEND_URL + postCard.url
    } else {
      cardImg = BACKEND_URL + thumbnail.url //fallback to thumbnail image size
    }
  }

  return {
    lead: img,
    mobile: mImg,
    postCard: cardImg,
    thumbnail: thumbImg
  }
}