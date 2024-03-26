'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { blogData } from '@/components/blogData';
import Image from 'next/image';
import styles from './ReadMore.module.scss';
import BlogCard from '@/components/BlogComp/BlogCard';
import { images } from '@/exports/images';
import AuthorCard from '@/components/BlogComp/AuthorCard';
import LicenseCard from '@/components/BlogComp/LicenseCard';

function ReadMore() {
  const { id } = useParams();

  const articleToRead = blogData.find((item) => item.id.toString() === id);

  const youMightLike = blogData.filter((item) => item.id.toString() !== id);

  return (
    <main className={`${styles.readMore}  my-5 overflow-x-hidden`}>
      <section className='container mt-[50px]'>
        <figure
          data-aos='zoom-out'
          data-aos-duration='1200'
          className={styles.banner}
        >
          <Image
            src={articleToRead?.imageUrl || ''}
            alt={articleToRead?.title || ''}
          />
        </figure>

        <article
          data-aos='fade-in'
          data-aos-delay='300'
          className='container flex flex-col mt-[-250px]  '
        >
          <h2 className='my-5'>{articleToRead?.title}</h2>
          <section className='flex flex-wrap gap-2 items-center mt-3 w-full lg:w-5/12'>
            <div className='flex gap-1 items-center'>
              <figure className='w-[24px] h-[24px] '>
                <Image src={images.penIcon} alt='' />
              </figure>
              <h6>by {articleToRead?.authorName}</h6>
            </div>
            <div className='flex gap-1 items-center'>
              <figure className='w-[24px] h-[24px] '>
                <Image src={images.clockIcon} alt='' />
              </figure>
              <h6>by {articleToRead?.read}</h6>
            </div>
            <div className='flex gap-1 items-center'>
              <figure className='w-[24px] h-[24px] '>
                <Image src={images.eyeIcon} alt='' />
              </figure>
              <h6>{articleToRead?.views}</h6>
            </div>
            <div className='flex gap-1 items-center'>
              <figure className='w-[24px] h-[24px] '>
                <Image src={images.DateIcon} alt='' />
              </figure>
              <h6>{articleToRead?.date}</h6>
            </div>
          </section>
        </article>
      </section>

      <section className='container mt-[100px] flex flex-col lg:flex-row justify-between'>
        <div
          data-aos='fade-right'
          data-aos-delay='300'
          className='my-5 w-full lg:w-7/12'
        >
          {articleToRead?.blogContent}
        </div>

        <div className=' w-full lg:w-4/12'>
          <AuthorCard
            imageUrl={articleToRead?.authorImageUlr}
            name={articleToRead?.authorName}
            desc={articleToRead?.authorDes}
          />
        </div>
      </section>
      <LicenseCard />

      <section className={`container my-9 ${styles.mightLike}`}>
        <h3 className='mt-5'>Readers love these </h3>
        <section className={`${styles.blogCardContainer}  my-5`}>
          {youMightLike
            .slice(0, 3)
            .map(
              ({
                id,
                title,
                authorImageUlr,
                authorName,
                read,
                date,
                imageUrl,
              }) => (
                <BlogCard
                  key={id}
                  id={id}
                  title={title}
                  authorImageUlr={authorImageUlr}
                  authorName={authorName}
                  read={read}
                  date={date}
                  imageUrl={imageUrl}
                />
              ),
            )}
        </section>
      </section>
    </main>
  );
}

export default ReadMore;
