import React from 'react';
import styles from './Contact.module.scss';
import ContactForm from '@/components/ContactComps/ContactForm';
import Reviews from '@/components/Reviews/Reviews';

export default function page() {
  return (
    <main className={styles.contact}>
      <section className='container'>
        <hgroup className='w-full md:w-6/12 my-[80px] '>
          <h2>Let&apos;s talk about your project</h2>
        </hgroup>

        <ContactForm styles={styles} />

        <section className={styles.reviewWrappr}>
          <Reviews />
        </section>
      </section>
    </main>
  );
}
