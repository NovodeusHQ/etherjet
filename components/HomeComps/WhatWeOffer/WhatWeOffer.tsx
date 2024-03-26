import React from 'react';

export const WhatWeOffer = () => {
  const offerData = [
    {
      id: 1,
      title: 'KOL Recruitment & Management',
      subTitle:
        'Tap into the influence of Key Opinion Leaders (KOLs) with our strategic recruitment and effective management solutions.',
    },
    {
      id: 2,
      title: 'Community Managers',
      subTitle:
        'Forge strong connections with your community through our tailored community management strategies.',
    },
    {
      id: 3,
      title: 'Market Makers',
      subTitle:
        'Navigate the blockchain space confidently with our market-making expertise, ensuring liquidity and market stability.',
    },
    {
      id: 4,
      title: 'Advisory',
      subTitle:
        'Receive expert guidance and insights to make informed decisions for your Web3 project',
    },
    {
      id: 5,
      title: 'Graphics Designers',
      subTitle:
        'Transform your ideas into captivating visuals with our creative graphic design team.',
    },
  ];

  return (
    <section id='solution' className='whatWeOffer '>
      <div className='container text-center flex flex-col justify-center'>
        <h2 data-aos='fade-in'>What We Offer</h2>

        <article className='flex flex-wrap justify-center mt-5 gap-5 mx-auto'>
          {offerData.map(
            ({
              id,
              title,
              subTitle,
            }: {
              id: number;
              title: string;
              subTitle: string;
            }) => (
              <ul
                data-aos='fade-left'
                key={id}
                className='flex flex-col justify-center bg-red-800 w-full  md:w-[48%] px-5 py-8  lg:py-[1em] lg:px-[2em] md:min-h-[180px] circleHover'
              >
                <li>
                  <h4 className='mb-4'>{title} </h4>
                  <p>{subTitle} </p>
                </li>
              </ul>
            ),
          )}
        </article>
      </div>
    </section>
  );
};
