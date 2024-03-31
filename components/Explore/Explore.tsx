'use client'

import Image from 'next/image';
import React, { FormEvent } from 'react';
import KOLAnimation from '../SVGs/KOLAnimation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { sendProposalEmail } from '@/app/actions';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn submit-proposal-btn'
    disabled={pending}
    >Submit</button>
  )
}

const Explore = () => {

  const submitHandler = async (formData: FormData) => {
    const response = await sendProposalEmail(formData);

    // console.log(response);

    if (response.success) toast.success("Proposal submitted successfully!");
    else toast.error("Failed to submit proposal\nPlease try again");
  }

  return (
    <section className='explore flex flex-col md:flex-row justify-between container my-[100px]'
    id='explore'>
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
        style={{ paddingBottom: '50px' }}
      >
        <h2 className='w-full md:w-8/12'>Explore Your Possibilities</h2>
        <p className='my-3'>
          Ready to elevate your Web3 experience? Join hundreds of happy clients
          by diving into our services and discovering how EtherEdge can empower
          your Web3 project.{' '}
        </p>
        <form className='mt-7' action={submitHandler}>
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
              name='telegram'
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
          <div className='my-5'>
            <SubmitButton />
          </div>

        </form>
      </article>
    </section>
  );
};

export default Explore;
