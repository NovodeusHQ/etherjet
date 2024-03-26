import React from 'react';
import styles from './Pyraqin.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import CaseStudy from '@/components/CaseStudy/CaseStudy';
import LicenseCard from '@/components/BlogComp/LicenseCard';

export default function page() {
  return (
    <main className='overflow-x-hidden'>
      <div className={`${styles.saruya} container flex flex-col`}>
        <section
          className={`${styles.saruyaHero} flex flex-col flex-col-reverse md:flex-row gap-4 justify-between items-center`}
        >
          <article data-aos='fade-left' className='w-full md:w-7/12'>
            <hgroup className='flex'>
              <h2 className='gradient-text'> PyraQin</h2>
            </hgroup>

            <h4>Client: Web3 Innovations Ltd.</h4>
            <h4 className='my-8'>Industry: Decentralized Finance (DeFi).</h4>

            <p>
              In the highly competitive realm of decentralized finance, Web3
              Innovations Ltd. sought to establish a strong market presence for
              their groundbreaking DeFi platform. The challenge extended beyond
              technological innovation; it involved community building, market
              liquidity, and strategic positioning within the Web3 ecosystem.
              Enter EtherEdge, the guiding force that transformed challenges
              into opportunities.
            </p>
          </article>

          <figure
            data-aos='zoom-in-left'
            data-aos-delay='300'
            className='w-full md:w-4/12'
          >
            <Image src={images.elephantCard} alt='' />
          </figure>
        </section>

        <section
          data-aos='fade-left'
          data-aos-delay='300'
          className='flex flex-wrap gap-4 justify-between'
        >
          <article className='goalCard w-full md:w-[48%] '>
            <h4>Challenge</h4>
            <p className='mt-3'>
              Web3 Innovations Ltd. faced a crucial challenge with the launch of
              their decentralized finance (DeFi) platform. While the technology
              was innovative, creating an engaged and vibrant community proved
              to be a significant hurdle. The initial community response was
              lukewarm, and the project lacked the necessary momentum and
              organic growth.
            </p>
          </article>
          <article className='goalCard w-full md:w-[48%]'>
            <h4>Goals</h4>
            <p className='mt-3'>
              Primary Goal: Establish a thriving and engaged community around
              the DeFi platform. <br />
              Secondary Goal: Increase brand recognition within the DeFi
              community.
            </p>
          </article>
        </section>

        <section
          data-aos='fade-right'
          data-aos-delay='300'
          className='my-[100px] text-center'
        >
          <hgroup className='flex flex-col  '>
            <h5 className='gradient-text'>EtherEdge&apos;s Approach</h5>
            <h4 className='my-5'>Community Managers Expertise</h4>
          </hgroup>

          <p className='my-5'>
            Our approach revolved around a strategic blend of word-of-mouth
            marketing through incentivized campaigns, leveraging
            EtherEdge&apos;s extensive partnership network to amplify our quest
            campaigns and reach an audience of 1 million without incurring
            additional costs. Simultaneously, we established a mechanism for
            capturing wallet addresses, enabling us to effectively track
            community members&apos; purchasing power and contributions to the
            ecosystem. Moreover, our strategic collaboration with Twitter
            allowed us to secure approval for crypto ads, facilitating increased
            traffic and visibility for Saruya within the crypto and gaming
            communities. This holistic strategy aimed to attract, engage, and
            monitor community growth, delivering measurable results aligned with
            the challenge at hand.
          </p>
        </section>

        <section className={`${styles.countWrapper} `}>
          <section
            data-aos='zoome-in-right'
            data-aos-delay='300'
            className={` flex flex-wrap gap-4 justify-between text-center w-full md:w-8/12 lg:w-6/12 mx-auto justify-center my-[100px]`}
          >
            <article className={`${styles.countCard}  w-full md:w-[48%]`}>
              <div>
                <h4 className='gradient-text'>13K</h4>
                <p>Community Growth</p>
              </div>
            </article>
            <article className={`${styles.countCard}  w-full md:w-[48%] mt-10`}>
              <div>
                <h4 className='gradient-text'>$1.4M</h4>
                <p>in tracked on chain wealth tracked entering our community</p>
              </div>
            </article>
          </section>
        </section>

        <section className='my-[100px] '>
          <h2>Result</h2>
          <section className='flex flex-wrap items-center justify-between gap-5'>
            <article className='w-full lg:w-7/12'>
              <p className='mt-10'>
                Our collaborative efforts with Web3 Innovations Ltd yielded
                remarkable results, underscoring the success of our approach in
                driving community growth and tracking actual purchasing power.
                Our incentivized word-of-mouth campaign engaged 80,000
                participants, infusing new energy into the Saruya community.
                Leveraging our partnership with Twitter, we achieved substantial
                Twitter growth of 13,000 new followers, expanding Saruya&apos;s
                social media presence and reach. Additionally, our mechanism for
                capturing wallet addresses facilitated the tracking of an
                impressive $1.4 million in on-chain wealth entering the
                community, offering valuable insights into the purchasing power
                of new members and enhancing Saruya&apos;s ecosystem growth.
                These results reflect the effectiveness of our comprehensive
                strategy and reinforce Saruya&apos;s position as a thriving web3
                ecosystem.
              </p>
            </article>

            <article className='flex items-center flex flex-wrap justify-center  gap-4'>
              <section className='flex flex-col gap-4 md:flex-row lg:flex-col'>
                <div className={`${styles.countCircle} text-center`}>
                  <div>
                    <h4>80K</h4>
                    <p>Participant</p>
                  </div>
                </div>
                <div className={`${styles.countCircle} text-center`}>
                  <div>
                    <h4>13K</h4>
                    <p>Twitter Growth</p>
                  </div>
                </div>
              </section>

              <section>
                <div className={`${styles.countCircle} text-center`}>
                  <div>
                    <p>
                      in tracked on chain wealth tracked entering the community
                    </p>
                    <h4>$1.4M</h4>
                  </div>
                </div>
              </section>
            </article>
          </section>
        </section>
      </div>
      <CaseStudy title='Some Works' />

      <section className='my-[100px] '>
        <LicenseCard />
      </section>
    </main>
  );
}
