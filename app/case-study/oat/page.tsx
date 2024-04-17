import React from 'react';
import styles from './OAT.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import CaseStudy from '@/components/CaseStudy/CaseStudy';
import LicenseCard from '@/components/BlogComp/LicenseCard';
import 'primeicons/primeicons.css';

export default function page() {
  return (
    <main className='overflow-x-hidden'>
      <div className={`${styles.saruya} container flex flex-col  `}>
        <section
          className={`${styles.saruyaHero} flex flex-col flex-col-reverse md:flex-row gap-4 justify-between items-center`}
        >
          <article data-aos='fade-left' className='w-full md:w-7/12'>
            <hgroup className='flex'>
              <h2 className='gradient-text'>OAT NETWORK</h2>
            </hgroup>

            <h4>Client: OAT Network</h4>
            <h4 className='my-8'>Industry: Memecoin and DEFI</h4>

            <p>
              <span className="font-semibold">$OAT - </span>The first layer2 network for Bittensor. Bringing diversity onto the $TAO ecosystem.
              <br /> <br />
              Designed as an EVM-compatible based L2 providing extensions to the capabilities of TAO network for scalability through enhancements such as higher transaction throughputs.
              <br /> <br />
              <span className="font-semibold">Contract Address (ETH Mainnet): </span>0x781fbc4c6Edf7a37DCc08a3B323F122e8a09Eac5
            </p>
            <br />
            <div>
              <span className="font-semibold">Links: </span>
              &nbsp;
              <a href="https://twitter.com/OatLayer2" target='_blank'><i className="pi pi-twitter"></i>&nbsp;Twitter</a> &nbsp; |
              &nbsp; <a href="https://t.me/OatPortal" target='_blank'><i className="pi pi-telegram"></i>&nbsp;Telegram&nbsp;</a> &nbsp; |
              &nbsp; <a href="https://www.oatchain.io/" target='_blank'><i className="pi pi-globe"></i>&nbsp;Website</a>  &nbsp;|
              &nbsp; <a href="https://www.oatchain.io/whitepaper.pdf" target='_blank'><i className="pi pi-book"></i>&nbsp;Whitepaper</a> &nbsp; |
              &nbsp; <a href="#"><i className="pi pi-file-check"></i>&nbsp;Audit</a> &nbsp; |
              &nbsp; <a href="#"><i className="pi pi-github"></i>&nbsp;Github</a>

            </div>
          </article>

          <figure
            data-aos='zoom-in-left'
            data-aos-delay='300'
            className='w-full md:w-4/12'
          >
            <Image src={images.OATNetWork} alt='' />
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
              BYTE ON BLAST initially faced significant challenges in establishing a robust online presence and generating interest within the cryptocurrency community. With just 10 members on Telegram and a non-functional page, the brand&apos;s visibility and engagement were minimal.
            </p>
          </article>
          <article className='goalCard w-full md:w-[48%]'>
            <h4>Goals</h4>
            <p className='mt-3'>
              <span className="font-semibold">Primary Goal:</span> Grow a substantial, engaged community, increase brand awareness, and successfully raise funds for the project.  <br />
              <span className="font-semibold">Secondary Goal:</span> BYTE ON BLAST aimed to establish itself as a key player in the cryptocurrency space and create a dedicated following.
            </p>
          </article>
        </section>


        {/* Our Approach */}
        <section
          data-aos='fade-right'
          data-aos-delay='300'
          className='my-[100px]'
        >
          <hgroup className='flex flex-col'>
            <h5 className='gradient-text text-center'>EtherEdge&apos;s Approach</h5>

            {/* <h4 className='my-5'>Community Managers Expertise</h4> */}
          </hgroup>

          <p className='my-3'>
            ETHER EDGE MEDIA crafted and executed a comprehensive marketing and management plan to achieve BYTE ON BLAST&apos;s goals. <br /> This plan included:
          </p>

          <h4 className='my-4'>KOL Management</h4>
          <p className='my-3'>
            Securing top-tier key opinion leaders (KOLs) to elevate BYTE ON BLAST&apos;s reputation and visibility in the market, particularly for pre-launch marketing campaigns.

          </p>

          <h4 className='my-4'>Graphics Design</h4>
          <p className='my-3'>
            Designing visually appealing and professional graphics to enhance the brand&apos;s online presence across various platforms.
          </p>

          <h4 className='my-4'>Community Management</h4>
          <p className='my-3'>
            Establishing and nurturing an engaged and positive community through strategic interactions and consistent communication.
          </p>

          <h4 className='my-4'>Member Growth and Overall Management</h4>
          <p className='my-3'>
            Implementing targeted strategies to rapidly expand the Telegram community and other social channels, ensuring sustained engagement and active participation.
          </p>

          {/* Stats & Results */}

          {/* <hgroup className={`${styles.stats} flex flex-col`}>
            <h5 className='gradient-text text-center'>Stats & Results</h5>
          </hgroup>

          <p className='my-3'>
            The comprehensive marketing plan delivered outstanding outcomes:
          </p>

          <h4 className='my-4'>Community Growth</h4>
          <p className='my-3'>
            BYTE ON BLAST&apos;s Telegram community grew from 10 members to over 1,500 active and engaged participants, contributing to a vibrant online ecosystem.

          </p>

          <h4 className='my-4'>Fundraising Success</h4>
          <p className='my-3'>
            The pre-launch marketing campaign generated over 200 ETH, valued at over $700k USD, within a span of just two hours, demonstrating the campaign&apos;s effectiveness in driving investor interest.
          </p>

          <h4 className='my-4'>Cult-Like Following</h4>
          <p className='my-3'>
            The strategic approach fostered a strong sense of loyalty and enthusiasm within the community, establishing a dedicated following around BYTE ON BLAST.
          </p>

          <h4 className='my-4'>Expanded Audience Reach</h4>
          <p className='my-3'>
            The marketing efforts successfully tapped into the Chinese audience and other key demographics on Crypto Twitter, broadening BYTE ON BLAST&apos;s reach and influence.
          </p>

          <p className={`${styles.approachSummary} my-5 text-center`}>
            ETHER EDGE MEDIA&apos;s strategic and targeted approach led to significant success for BYTE ON BLAST, firmly positioning the brand for sustained growth and prominence within the cryptocurrency industry.
          </p> */}

        </section>

        <section className={`${styles.countWrapper} `}>
          <section
            data-aos='zoome-in-right'
            data-aos-delay='300'
            className={` flex flex-wrap gap-4 justify-between text-center w-full md:w-8/12 lg:w-6/12 mx-auto justify-center my-[100px]`}
          >
            <article className={`${styles.countCard}  w-full md:w-[48%]`}>
              <div>
                <h4 className='gradient-text'>1.5K</h4>
                <p>Community Growth</p>
              </div>
            </article>
            <article className={`${styles.countCard}  w-full md:w-[48%] mt-10`}>
              <div>
                <h4 className='gradient-text'>$700k</h4>
                <p>in tracked on chain wealth tracked entering our community</p>
              </div>
            </article>
          </section>
        </section>

        <section className='my-[100px] '>
          <h2>Stats & Results</h2>
          <section className='flex flex-wrap items-center justify-between gap-5'>
            <article className='w-full lg:w-7/12'>
              <div className='mt-10'>
                <p> The comprehensive marketing plan delivered outstanding outcomes:</p>
                <br />
                <p><span className="font-semibold">Community Growth: </span>
                  BYTE ON BLAST&apos;s Telegram community grew from 10 members to over 1,500 active and engaged participants, contributing to a vibrant online ecosystem.
                </p>
                <br />
                <p><span className="font-semibold">Fundraising Success: </span>
                  The pre-launch marketing campaign generated over 200 ETH, valued at over $700k USD, within a span of just two hours, demonstrating the campaign&apos;s effectiveness in driving investor interest.
                </p>
                <br />
                <p><span className="font-semibold">Cult-Like Following: </span>
                  The strategic approach fostered a strong sense of loyalty and enthusiasm within the community, establishing a dedicated following around BYTE ON BLAST.
                </p>
                <br />
                <p><span className="font-semibold">Expanded Audience Reach: </span>
                  The marketing efforts successfully tapped into the Chinese audience and other key demographics on Crypto Twitter, broadening BYTE ON BLAST&apos;s reach and influence.
                </p>
                <br />
                <p>
                  ETHER EDGE MEDIA&apos;s strategic and targeted approach led to significant success for BYTE ON BLAST, firmly positioning the brand for sustained growth and prominence within the cryptocurrency industry.
                </p>
              </div>
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
                    <h4>1.5K</h4>
                    <p>Twitter Growth</p>
                  </div>
                </div>
              </section>

              <section>
                <div className={`${styles.countCircle} text-center`}>
                  <div>
                    <p>
                      in tracked on chain wealth <br /> tracked entering the community
                    </p>
                    <h4>$700k</h4>
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
