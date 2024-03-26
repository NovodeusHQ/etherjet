'use client';
import React, { useRef } from 'react';
import { images } from '@/exports/images';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const KOLAnimation = () => {
  let container = useRef<any>(null);
  let ss = useRef<any>(null);
  useGSAP(
    () => {
      ss.current = gsap
        .timeline()
        .fromTo(
          '.c2',
          {
            rotate: 90,
            duration: 6,
            ease: 'power4.Out',
            //   yoyo: true,
          },
          {
            duration: 6,
            repeat: -1,
            rotate: -50,
            ease: 'power4.Out',
            yoyo: true,
          },
        )
        .fromTo(
          '.c1',
          {
            rotate: -20,
            duration: 6,
            ease: 'power4.Out',
            //   yoyo: true,
          },
          {
            duration: 6,
            repeat: -1,
            rotate: 0,
            ease: 'power4.Out',
            yoyo: true,
          },
          0,
        )
        .fromTo(
          '.c3',
          {
            rotate: -360,
            duration: 6,
            ease: 'power4.Out',
            //   yoyo: true,
          },
          {
            duration: 6,
            repeat: -1,
            rotate: 50,
            ease: 'power4.Out',
            yoyo: true,
          },
          0,
        )
        .fromTo(
          '.c4',
          {
            scale: 0,
            opacity: 0,
            duration: 6,
            ease: 'power4.Out',
            //   yoyo: true,
          },
          {
            scale: 2,
            opacity: 0.4,
            duration: 6,
            repeat: -1,
            ease: 'power4.Out',
            yoyo: true,
          },
          0,
        );
    },
    { scope: container },
  );

  return (
    <section className='kolContainer  ' ref={container}>
      <div className='c4'></div>
      <figure className='c2'>
        <Image src={images.c2} alt='' />
      </figure>

      <figure className='c3'>
        <Image src={images.mainImage} alt='' />
      </figure>

      <figure className='c1'>
        <Image src={images.c1} alt='' />
      </figure>
    </section>
  );
};

export default KOLAnimation;
