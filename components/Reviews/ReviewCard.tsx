import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './Review.module.scss';
import RevStars from '../SVGs/RevStars';

export interface IReview {
  id: number | string | undefined;
  title: string;
  quote: string;
  imageUrl: string | StaticImageData;
  name: string;
  // role: string;
  stars: boolean;
  openedDropdown: boolean;
}

const ReviewCard: React.FC<IReview> = ({
  id,
  title,
  quote,
  name,
  // role,
  imageUrl,
  stars,
  openedDropdown
}) => {
  return (
    <section className={`${styles.reviewCard} ${openedDropdown || Number(id) < 3 ? '' : styles.hideCard}`}>
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
            <Image src={imageUrl} className='rounded-full' alt='' />
          </figure>
        )}
        <div>
          <p>{name} </p>
          {/* <p>{role} </p> */}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
