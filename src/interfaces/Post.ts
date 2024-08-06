import { MediaImg } from "./MediaImg";

export interface IPost {
  id:         number;
  attributes: {
    title:        string;
    shortCaption: any[];
    content:      any[];
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    leadImg?:     MediaImg;
    comments:     any[];
  };
}