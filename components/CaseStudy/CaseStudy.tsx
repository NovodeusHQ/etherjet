import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { images } from '@/exports/images';
import { ICaseStudy } from '@/Types/types';

const CaseStudy = ({ title }: { title: string }) => {
  const CaseStudyData: ICaseStudy[] = [
    // {
    //   id: 1,
    //   title: 'HeculeX',
    //   url: '/case-study/herculex',
    //   imageUrl: images.caseStudy1,
    // },
    // {
    //   id: 2,
    //   title: 'PyraQiN',
    //   url: '/case-study/pyraqin',
    //   imageUrl: images.caseStudy2,
    // },
    // {
    //   id: 3,
    //   title: 'Saruya',
    //   url: '/case-study/saruya',
    //   imageUrl: images.caseStudy3,
    // },
    // {
    //   id: 4,
    //   title: 'PyraQiN',
    //   url: '/case-study/pyraqins-vis',
    //   imageUrl: images.caseStudy4,
    // },
    // {
    //   id: 5,
    //   title: 'Airborne',
    //   url: '/case-study/airborne',
    //   imageUrl: images.caseStudy5,
    // },
    // {
    //   id: 6,
    //   title: 'Vortex',
    //   url: '/case-study/vortex',
    //   imageUrl: images.caseStudy6,
    // },
    {
      id: 1,
      title: 'OAT Network',
      url: '/case-study/oat',
      imageUrl: images.OATNetWork,
    },
    {
      id: 7,
      title: 'Byte on Blast',
      url: '/case-study/byte-on-blast',
      imageUrl: images.caseStudy7,
    },
    {
      id: 8,
      title: 'Coming Soon',
      url: '#case-study',
      imageUrl: images.caseStudy8,
      comingSoon: true
    },
    // {
    //   id: 9,
    //   title: 'Mantis',
    //   url: '#case-study',
    //   imageUrl: images.caseStudy9,
    //   comingSoon: true
    // }
     {
      id: 10,
      title: 'Coming Soon',
      url: '#case-study',
      imageUrl: images.caseStudy10,
      comingSoon: true
    },
  ];

  return (
    <section id='case-study' className='my-[100px]'>
      <div className=' my-10'>
        <h2 className='text-center my-2'>{title}</h2>
        <hr />
      </div>

      <section className='container w-full md:w-[75%] '>
        <CaseStudyCard data={CaseStudyData} />
      </section>
    </section>
  );
};

export default CaseStudy;
