import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface IPostCardProps {
  id: number;
  title: string;
  shortCaption: BlocksContent;
  image: string;
}