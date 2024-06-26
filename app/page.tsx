import CaseStudy from '@/components/CaseStudy/CaseStudy';
import Explore from '@/components/Explore/Explore';
import HeroSection from '@/components/HomeComps/HeroSection/HeroSection';
import Unravel from '@/components/HomeComps/Unravel/Unravel';
import { WhatWeOffer } from '@/components/HomeComps/WhatWeOffer/WhatWeOffer';
import WhatPeople from '@/components/Reviews/WhatPeople';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <Unravel />
      <WhatWeOffer />
      {/* <CaseStudy title='Case Studies' /> */}
      <div className='case-study-filler'></div>
      <WhatPeople />
      <Explore />
      <ToastContainer />
    </main>
  );
}
