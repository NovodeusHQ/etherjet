import React from 'react';
import { images } from '@/exports/images';
import Image from 'next/image';
import styles from './Team.module.scss';

export default function page() {
  const teamData = [
    {
      id: 1,
      title: 'John Carter',
      role: 'CEO & Founder',
      imageUrl: images.John,
    },
    {
      id: 2,
      title: 'Sophie Moore',
      role: 'VP of Design',
      imageUrl: images.Sophie,
    },
    {
      id: 3,
      title: 'Andy Smith',
      role: 'VP of Technology',
      imageUrl: images.Andie,
    },
    { id: 4, title: 'JJane Rodri', role: 'VP of Sale', imageUrl: images.Jane },
    {
      id: 5,
      title: 'Alice Abu',
      role: 'VP of Products',
      imageUrl: images.AliceAvarta,
    },
  ];

  return (
    <main className={styles.team}>
      <section className='container'>
        <section className='flex flex-col md:flex-row justify-between gap-3'>
          <article className='flex flex-col w-full md:w-6/12'>
            <h2>About the Team</h2>

            <p className='mt-5'>
              Welcome to EtherEdge, where we redefine the possibilities of the
              decentralized world. As a powerhouse behind some of the most
              disruptive Web3 trailblazers, we don&apos;t just recognize
              potential; we engineer it into unrivaled success, propelling your
              project to heights unattainable elsewhere.
              <br /> <br />
              At EtherEdge, our mission is clear - to navigate the future of
              Web3 with unparalleled expertise and innovation. We believe in
              empowering projects to not only adapt but thrive in the dynamic,
              decentralized landscape. With a commitment to excellence and a
              passion for pioneering solutions, we lay the foundation for your
              undeniable dominance.
            </p>
          </article>
          <aside className='flex flex-wrap gap-4 justify-center w-full md:w-6/12'>
            {teamData.map(({ id, title, role, imageUrl }) => (
              <div
                data-aos='zoom-in-left'
                key={id}
                className='w-[48%] md:w-[31%] lg:w-[29%] '
              >
                <figure>
                  <Image src={imageUrl} alt={title} />
                </figure>

                <div className='text-center mt-4'>
                  <h3>{title}</h3>
                  <p className='gradient-text'>{role} </p>
                </div>
              </div>
            ))}
          </aside>
        </section>

        <section className='my-[100px] '>
          <article
            data-aos='zoom-in-left'
            className='flex flex-wrap justify-between gap-2'
          >
            <div className='w-full md:w-[35%] flex items-center '>
              <h2>Let&apos;s help your project</h2>
            </div>
            <div
              className={`${styles.brandCards} goalCard w-full md:w-[30%] text-center`}
            >
              <h3>KOL Recruitment & Management</h3>
            </div>
            <div
              className={`${styles.brandCards} goalCard w-full md:w-[30%] text-center`}
            >
              <h3>Community Managers</h3>
            </div>
          </article>

          <article
            data-aos='zoom-in-left'
            className='flex flex-wrap justify-between gap-2 mt-10'
          >
            <div
              className={`${styles.brandCards} goalCard w-full md:w-[23%] text-center`}
            >
              <h3>Market Makers</h3>
            </div>
            <div
              className={`${styles.brandCards} goalCard w-full md:w-[23%] text-center`}
            >
              <h3>Advisory</h3>
            </div>
            <div
              className={`${styles.brandCards} goalCard w-full md:w-[23%] text-center`}
            >
              <h3>Graphics Designers</h3>
            </div>
            <button className={`  w-full md:w-[23%] text-center`}>
              <Image src={images.contactCard} alt='' />
            </button>
          </article>
        </section>
      </section>
    </main>
  );
}
