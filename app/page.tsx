import CaseStudy from '@/components/CaseStudy/CaseStudy';
import Explore from '@/components/Explore/Explore';
import HeroSection from '@/components/HomeComps/HeroSection/HeroSection';
import Unravel from '@/components/HomeComps/Unravel/Unravel';
import { WhatWeOffer } from '@/components/HomeComps/WhatWeOffer/WhatWeOffer';
import WhatPeople from '@/components/Reviews/WhatPeople';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <Unravel />
      <WhatWeOffer />
      <CaseStudy title='Case Studies' />
      <WhatPeople />
      <Explore />
    </main>
  );
}
