'use client';
import React, { useState } from 'react';
import styles from './Blog.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import Link from 'next/link';
import { blogData } from '@/components/blogData';
import BlogCard from '@/components/BlogComp/BlogCard';
import CaseStudy from '@/components/CaseStudy/CaseStudy';

const Blog = () => {
  const [sliceData, setSliceData] = useState(7);

  const loadMore = () => {
    setSliceData(blogData.length);
  };

  return (
    <main className='overflow-x-hidden'>
      <section className={` ${styles.blog} container flex flex-col `}>
        <div className=' mt-5 '>
          <h2> Blog </h2>
          <small className='text-[#898D8F]'>Here are our thoughts</small>
        </div>
        <section
          className={` flex flex-col md:flex-row ${styles.blogHero} justify-between gap-3 my-10`}
        >
          <figure className={`w-full md:w-4/12 `}>
            <Image src={images.blog1} alt='' />
          </figure>

          <div className='flex flex-col justify-between w-full md:w-7/12 '>
            <h3>
              The Art of Community Building in Web3: A Comprehensive Guide
            </h3>
            <p className='my-4'>
              Discover the secrets to building and nurturing a thriving
              community in the decentralized space. EtherEdge&apos;s Community
              Managers share expert tips and real-world examples to empower your
              project.
            </p>

            <div className='my-5'>
              <Link
                href={`blog/${'featured'}`}
                className='main-btn text-center'
              >
                {' '}
                Read more{' '}
              </Link>
            </div>
          </div>
        </section>
        <section className='flex flex-col my-10'>
          <section
            className={`${styles.blogCardContainer}  flex flex-wrap gap-5 md:gap-3 lg:gap-10 justify-center`}
          >
            {blogData
              .slice(1, sliceData)
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
                    id={`blog/${id}`}
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

          {sliceData < blogData.length && (
            <div className='my-5 col-9 col-md-3 mx-auto'>
              <button
                className='main-btn col-12'
                type='button'
                onClick={loadMore}
              >
                More Article
              </button>
            </div>
          )}
        </section>
      </section>

      <CaseStudy title='Case Studies' />
    </main>
  );
};

export default Blog;
