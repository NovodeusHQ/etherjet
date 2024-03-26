import React from 'react';
import { MovinText } from '../MovingText/MovinText';

const Unravel = () => {
  const movingText = [
    'KOL Recruitment & Management',
    'Market Makers',
    'Community Managers',
    'Advisory',
    'KOL Recruitment & Management',
    'Graphics Designers',
    'Market Makers',
    'Community Managers',
    'Advisory',
    'Graphics Designers',
  ];

  return (
    <section className='text-center my-[100px] unravel py-10 h-[500px] flex flex-col gap-3 items-center overflow-hidden'>
      <MovinText texts={movingText} />

      <article className='container bg-[#FFFFFF0D] py-4 px-5 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[100px] rounded-br-[100px]'>
        <h2 data-aos='fade-left'>Unraveling the Next Web3 Unicorns</h2>
        <p data-aos='fade-right' className='my-4'>
          At EtherEdge, we&apos;re not passive spectators; we&apos;re
          orchestrators of extraordinary triumphs for Web3 innovators. Beyond
          mere recognition, we engineer potential into a powerful force,
          catapulting your project to unprecedented heights. Fuelled by
          unyielding client dedication and revolutionary strategic prowess, we
          forge the path for your unquestionable supremacy. The voyage to
          greatness commences right here, in the heart of the EtherEdge
          revolution.
        </p>
      </article>
    </section>
  );
};

export default Unravel;
