import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './Review.module.scss';
import RevStars from '../SVGs/RevStars';

export interface IReview {
  title: string;
  quote: string;
  imageUrl: string | StaticImageData;
  name: string;
  role: string;
  stars: boolean;
}

const ReviewCard: React.FC<IReview> = ({
  title,
  quote,
  name,
  role,
  imageUrl,
  stars,
}) => {
  return (
    <section className={styles.reviewCard}>
      <h4>{title}</h4>
      <p className='my-6'>{quote} </p>

      {stars && (
        <div className='my-3'>
          <RevStars />
        </div>
      )}
      <div className='flex gap-2 items-center'>
        {imageUrl !== '' && (
          <figure className='w-[34px] h-[32px]'>
            <Image src={imageUrl} alt='' />
          </figure>
        )}
        <div>
          <p>{name} </p>
          <p>{role} </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
