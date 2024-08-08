export interface IComment {
  id:         number;
  attributes: ICommentAttributes;
}

export interface ICommentAttributes{
  name:        string;
  content:     string;
  createdAt?:   Date;
  updatedAt?:   Date;
  publishedAt?: Date;
}