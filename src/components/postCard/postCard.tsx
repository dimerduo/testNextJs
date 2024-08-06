import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import Link from 'next/link'
import { IPostCardProps } from '@/interfaces/PostCard';

import styles from "./styles.module.sass"

const PostCard = (props:IPostCardProps) => {
  const { 
    id,
    title,
    shortCaption,
    image,
  } = props

  return(
    <div className={styles.PostCard}>
      <div className={styles.Image}>img</div>
      <div className={styles.Content}>
        <div className={styles.Title}>title</div>
        <div className={styles.ShortCaption}>caption</div>
        <div className={styles.BottomContainer}>
          <Link className={styles.BottomButton} href="#" >See more</Link>
        </div>
      </div>
    </div>
  )
} 