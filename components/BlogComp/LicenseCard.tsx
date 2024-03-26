import { images } from '@/exports/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './BlogCard.module.scss';

const LicenseCard = () => {
  return (
    <section
      className={`${styles.licenseCard} container flex flex-col lg:flex-row gap-3 justify-between`}
    >
      <article
        data-aos='fade-in'
        data-aos-delay='300'
        className='w-full lg:w-7/12 py-[1em] px-[2em] md:py-[2em] md:px-[3em] flex flex-col justify-between  '
      >
        <div className='flex gap-3'>
          <h3 className='w-11/12'>
            Empower Your Project with EtherEdge&apos;s Community Management
            Expertise
          </h3>
          <div>
            <button>
              <Image src={images.ArrowBtn} alt='' />
            </button>
          </div>
        </div>
        <p>
          Ready to take your community to new heights? EtherEdge&apos;s
          Community Managers are here to guide you.{' '}
        </p>
        <div data-aos='fade-in' data-aos-delay='300' className=' my-9'>
          <Link className='bookingBtn' href='/contact-us'>
            Book Meeting{' '}
          </Link>
        </div>
      </article>
      <figure
        data-aos='fade-right'
        data-aos-delay='300'
        className='w-full lg:w-5/12'
      >
        <Image src={images.LicenseImage} alt='' />
      </figure>
    </section>
  );
};

export default LicenseCard;
