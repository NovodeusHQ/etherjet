'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { ICaseStudy } from '@/Types/types';
import ArrowLeft from '../SVGs/ArrowLeft';
import ArrowRight from '../SVGs/ArrowRight';

interface ICaseStudyCardProps {
  data: ICaseStudy[];
}

const CaseStudyCard = ({ data }: ICaseStudyCardProps) => {
  return (
    <main className='slides relative'>
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={{
          nextEl: '.caseBtnNext',
          prevEl: '.caseBtnPrev',
          disabledClass: 'swiper-button-disabled',
        }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className='mySwiper'
      >
        <section className=''>
          {data.map(({ id, title, url, imageUrl }) => (
            <SwiperSlide key={id}>
              <Link href={url} className=''>
                <h5 className='mb-3'> {title} </h5>
                <figure className='mt-4'>
                  <Image src={imageUrl} alt={title} />
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </section>
      </Swiper>{' '}
      <section className='flex justify-center md:justify-between md:gap-0 gap-5 swipeBtns'>
        <button className='caseBtnNext'>
          <ArrowLeft className='Arrow' />
        </button>
        <button className='caseBtnPrev'>
          <ArrowRight className='Arrow' />
        </button>
      </section>
    </main>
  );
};

export default CaseStudyCard;
