import { MediaImg } from "./MediaImg";

export interface IPost {
  id:         number;
  attributes: {
    title:        string;
    shortCaption: string;
    content:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    leadImg?:     MediaImg;
    comments:     any[];
  };
}