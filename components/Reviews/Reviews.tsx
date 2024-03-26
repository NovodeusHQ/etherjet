'use client';
import { IReview } from '@/Types/types';
import { images } from '@/exports/images';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import ReviewCard from './ReviewCard';
import { Autoplay, Pagination } from 'swiper/modules';

const Reviews = () => {
  const RevData: IReview[] = [
    {
      id: 1,
      title: 'Incredible Team',
      quote:
        "“Working with EtherEdge'\ns Graphics Designers was a breath of fresh air. Their creativity knows no bounds, and every design they produced was a masterpiece. From our branding elements to marketing collateral, they helped us stand out in the crowded Web3 landscape.” ",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 2,
      title: 'Incredible Team',
      quote:
        "“Working with EtherEdge'\ns Graphics Designers was a breath of fresh air. Their creativity knows no bounds, and every design they produced was a masterpiece. From our branding elements to marketing collateral, they helped us stand out in the crowded Web3 landscape.” ",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },

    {
      id: 3,
      title: 'Incredible Team',
      quote:
        "“Working with EtherEdge'\ns Graphics Designers was a breath of fresh air. Their creativity knows no bounds, and every design they produced was a masterpiece. From our branding elements to marketing collateral, they helped us stand out in the crowded Web3 landscape.” ",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 4,
      title: 'Incredible Team',
      quote:
        "“Working with EtherEdge'\ns Graphics Designers was a breath of fresh air. Their creativity knows no bounds, and every design they produced was a masterpiece. From our branding elements to marketing collateral, they helped us stand out in the crowded Web3 landscape.” ",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
  ];

  return (
    <section>
      <h2 className='mt-[80px] text-center'>What People are Saying</h2>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        scrollbar={{ el: '.swiper-scrollbar' }}
        centeredSlides={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper py-10 '
      >
        <section className=''>
          {RevData.map(({ id, stars, title, quote, name, role, imageUrl }) => (
            <SwiperSlide key={id}>
              <ReviewCard
                stars={stars}
                title={title}
                quote={quote}
                name={name}
                role={role}
                imageUrl={imageUrl}
              />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>{' '}
    </section>
  );
};

export default Reviews;
