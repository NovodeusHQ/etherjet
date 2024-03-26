import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './BlogCard.module.scss';
import { images } from '@/exports/images';

interface IBlogCard {
  id: string | number;
  title: string;
  authorImageUlr: string | StaticImageData;
  authorName: string;
  read: string;
  date: string;
  imageUrl: string | StaticImageData;
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  title,
  authorImageUlr,
  authorName,
  read,
  date,
  imageUrl,
}) => {
  return (
    <Link
      href={`${id}`}
      key={id}
      className={`${styles.blogCard} flex  flex-col justify-around md:justify-between `}
    >
      <figure className=''>
        <Image src={imageUrl} alt='' />
      </figure>
      <section className='p-5'>
        <h5>{title}</h5>

        <div
          className={`${styles.blogDeets} flex flex-col justify-between gap-2 mt-7`}
        >
          <div className='flex gap-3 items-center'>
            <figure className='w-[24px] h-[24px] '>
              <Image src={authorImageUlr} alt='' />
            </figure>
            <h6>{authorName}</h6>
          </div>
          <div className='flex gap-3 items-center'>
            <figure className='w-[24px] h-[24px] '>
              <Image src={images.DateIcon} alt='' />
            </figure>
            <h6>{date}</h6>
          </div>
          <div className='flex gap-3 items-center'>
            <figure className='w-[24px] h-[24px] '>
              <Image src={images.clockIcon} alt='' />
            </figure>
            <h6>{read}</h6>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default BlogCard;
