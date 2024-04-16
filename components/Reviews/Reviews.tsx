'use client';
import { IReview } from '@/Types/types';
import { images } from '@/exports/images';
import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import ReviewCard from './ReviewCard';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';

const Reviews = () => {
  const router = useRouter();

  const [openedDropdown, setOpenedDropdown] = useState(true);

  const toggleDropdown = () => {
    setOpenedDropdown(!openedDropdown);
    router.push("#what-people-are-saying");
  };




  const RevData: IReview[] = [
    {
      id: 1,
      title: 'Influential KOL Recruitment',
      quote:
        "“ETHER EDGE MEDIA exceeded our expectations with their comprehensive approach. Their KOL recruitment and management provided us with top influencers who effectively boosted our brand visibility. Their social media management increased engagement and expanded our reach. Our campaigns were executed seamlessly and delivered impressive results.” ",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 2,
      title: 'Community Management Expertise',
      quote:
        "“The team at ETHER EDGE MEDIA is highly skilled in community management. They nurtured a vibrant and positive community for us, facilitating productive discussions and building a loyal base. The agency’s innovative strategies and dedication to excellence have been instrumental in our success.”",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 3,
      title: 'Enhanced Brand Recognition',
      quote: "“Thanks to ETHER EDGE MEDIA's expert handling of our marketing plan, we experienced a substantial increase in brand recognition. Their well-coordinated graphics design and content creation significantly enhanced our online presence. We now have a more cohesive and professional image.”",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 4,
      title: 'Rapid Community Expansion',
      quote: "“Working with ETHER EDGE MEDIA on our crypto project was a game-changer. Their member growth strategies attracted the right audience and expanded our community quickly. Their efforts translated directly into increased investment and a strong, supportive user base.”",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 5,
      title: 'Strategic Market Penetration',
      quote: "“ETHER EDGE MEDIA provided exceptional service across all aspects of our project. Their strategic approach and ability to tap into new demographics on platforms like Crypto Twitter and beyond allowed us to reach new heights. The agency's deep understanding of the crypto market made them an invaluable partner in achieving our goals.”",
      imageUrl: images.alice,
      name: 'Alice Smith,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
  ];

  return (
    <section>
      <h2 className='mt-[80px] text-center' id="what-people-are-saying">
        What People are Saying
      </h2>
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
                id={id}
                stars={stars}
                title={title}
                quote={quote}
                name={name}
                role={role}
                imageUrl={imageUrl}
                openedDropdown={openedDropdown}
              />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>{' '}
    </section>
  );
};

export default Reviews;
