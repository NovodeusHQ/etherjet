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
      title: 'Stellar Market-Making Strategies',
      quote:
        "“I was blown away by their graphics design – it’s like they read my mind! The KOL management also brought some serious influencers on board. They really know their stuff.” ",
      imageUrl: images.Li,
      name: 'Abel,',
      role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 2,
      title: 'Essential ICO Advisory Services',
      quote:
        "“If you’re launching an ICO, their advisory services are a must. Their insights made everything smoother, and the support was just incredible. Truly a professional team.”",
      imageUrl: images.JohnSmith,
      name: 'Justin Khan,',
      role: 'CEO at CryptoLaunch Advisors',
      stars: true,
    },
    {
      id: 3,
      title: 'Perfect Brand Capture and Social Media Boost',
      quote: "“I can’t say enough good things about their graphics design. They captured our brand perfectly. Plus, the KOL management boosted our social media presence massively.”",
      imageUrl: images.Yuki,
      name: 'Yuki Tanaka,',
      role: 'Brand Manager at Sakura Tech Solutions',
      stars: true,
    },
    {
      id: 4,
      title: 'Amazing Graphics and KOL Management',
      quote: "“Their team is simply amazing. The graphics design was spot on, and their KOL management brought us the right voices. Our project looks and feels fantastic now!”",
      imageUrl: images.Olivia,
      name: 'Olivia Martins,',
      role: 'Product Manager at NovaTech Enterprises',
      stars: true,
    },
    {
      id: 5,
      title: 'Boosting Liquidity and Visibility',
      quote: "“Their team is simply amazing. The graphics design was spot on, and their KOL management brought us the right voices. Our project looks and feels fantastic now!”",
      imageUrl: images.Carlos,
      name: 'Elijah carter,',
      role: 'Head of Trading at LatAm Exchange',
      stars: true,
    },
    {
      id: 6,
      title: 'Strategic and Practical Advisory Services',
      quote: "“Their advisory services are like a breath of fresh air. They offered us strategic advice and practical tips that really made a difference. You can’t go wrong with them.”",
      imageUrl: images.Sergey,
      name: 'Sergey Ivanov,',
      role: 'Strategic Consultant at EastWind Strategies ',
      stars: true,
    },
    {
      id: 7,
      title: 'Stunning Graphics and Effective Market-Making',
      quote: "“From day one, I knew we were in good hands. Their graphics are stunning, and the market-making strategies they provided were spot on. Our project’s visibility skyrocketed!”",
      imageUrl: images.Fatima,
      name: 'Fatima Al-Sayed,',
      role: 'Project Manager at Oasis Ventures ',
      stars: true,
    },
    {
      id: 8,
      title: 'Next-Level KOL Management and Advisory',
      quote: "“What a team! Their KOL management is on another level. They connected us with influencers who genuinely support our cause. Plus, their advisory services were spot on.”",
      imageUrl: images.Lars,
      name: 'Lars Johansson,',
      role: 'Marketing Consultant at Nordic Growth Partners ',
      stars: true,
    },
    {
      id: 9,
      title: 'Outstanding Marketing Strategies and Executionn',
      quote: "“Their marketing strategies are truly exceptional. They helped us reach a broader audience and effectively conveyed our brand message. Their execution was flawless, and the results exceeded our expectations.”",
      imageUrl: images.alice,
      name: 'Sofia Hernandez,',
      role: 'Chief Marketing Officer at Global Impact Ventures ',
      stars: true,
    },
    {
      id: 10,
      title: 'Next-Level KOL Management and Advisory',
      quote: "“Their market-making service was a game-changer. They improved our liquidity and gave us some valuable market insights. Can’t recommend them enough!.”",
      imageUrl: images.Ananya,
      name: 'Ananya Patel,',
      role: 'Financial Analyst at FinEdge Capital',
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
        <section className='slide-container'>
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
