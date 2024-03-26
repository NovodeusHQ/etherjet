import Image from 'next/image';
import React from 'react';
import KOLAnimation from '../SVGs/KOLAnimation';

const Explore = () => {
  return (
    <section className='explore flex flex-col md:flex-row justify-between container my-[100px] '>
      <div
        data-aos-duration='1500'
        data-aos='zoom-out'
        className='w-10/12 mx-auto md:w-[30%] h-[500px] flex justify-center overflow-hidden p-[20px]'
      >
        <KOLAnimation />
      </div>
      {/* <figure
        data-aos-duration='1500'
        data-aos='zoom-out'
        className='w-full md:w-[30%]'
      >
        <Image src={kol} alt='' />
      </figure> */}

      <article
        data-aos='fade-right'
        data-aos-duration='1500'
        className='w-full md:w-[55%]'
      >
        <h2 className='w-ful md:w-8/12'>Explore Your Possibilities</h2>
        <p className='my-5'>
          Ready to elevate your Web3 experience? Join hundreds of happy clients
          by diving into our services and discovering how EtherEdge can empower
          your Web3 project.{' '}
        </p>
        <form className='mt-10'>
          <div className='flex gape-3 justify-between my-3'>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Name*'
              className=' w-5/12 pb-3'
            />
            <input
              id='email'
              name='email'
              type='text'
              placeholder='Email*'
              className=' w-5/12 pb-3'
            />
          </div>
          <div className='my-5'>
            <input
              id='Telegram/WhatsApp*'
              name='Telegram/WhatsApp*'
              type='text'
              placeholder='Telegram/WhatsApp*'
              className='w-full pb-3 '
            />
          </div>
          <div className='my-5'>
            <input
              id='companyURL'
              name='companyURL'
              type='text'
              placeholder='Company URL'
              className='w-full pb-3 '
            />
          </div>
          <div className='my-5'>
            <textarea
              id='message'
              name='message'
              placeholder='Message'
              className='w-full pb-3 '
            />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Explore;
