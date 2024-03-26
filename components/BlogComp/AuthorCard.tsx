import React from 'react';
import styles from './BlogCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface IAuthor {
  imageUrl: string | StaticImageData;
  name?: string;
  desc?: string;
}

const AuthorCard: React.FC<IAuthor> = ({ imageUrl, name, desc }) => {
  return (
    <section
      data-aos='fade-left'
      className={`${styles.authorCard} flex flex-col justify-between min-h-[545px] py-8 px-6`}
    >
      <figure
        data-aos='zoom-in '
        data-aos-delay='300'
        className='w-[114px]  h-[114px] mx-auto mt-[50px] '
      >
        <Image src={imageUrl} alt='' />
      </figure>

      <div data-aos='fade-in' data-aos-delay='300' className='text-center'>
        <h3> {name} </h3>
        <p> {desc} </p>
      </div>

      <div data-aos='fade-in' data-aos-delay='300' className='text-center my-5'>
        <Link className='bookingBtn' href='/contact-us'>
          Book Meeting{' '}
        </Link>
      </div>
    </section>
  );
};

export default AuthorCard;
