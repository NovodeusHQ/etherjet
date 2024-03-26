import * as React from 'react';
import { SVGProps } from 'react';
const RevStars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={105}
    height={19}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#FFD84D'
        d='m10.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L10.5 14.51l-6.172 4.484 2.358-7.256L.514 7.255h7.629L10.5 0Z'
      />
    </g>
    <g clipPath='url(#b)'>
      <path
        fill='#FFD84D'
        d='m31.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L31.5 14.51l-6.172 4.484 2.358-7.256-6.172-4.483h7.629L31.5 0Z'
      />
    </g>
    <g clipPath='url(#c)'>
      <path
        fill='#FFD84D'
        d='m52.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L52.5 14.51l-6.172 4.484 2.358-7.256-6.172-4.483h7.629L52.5 0Z'
      />
    </g>
    <g clipPath='url(#d)'>
      <path
        fill='#FFD84D'
        d='m73.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L73.5 14.51l-6.172 4.484 2.358-7.256-6.172-4.483h7.629L73.5 0Z'
      />
    </g>
    <g clipPath='url(#e)'>
      <path
        fill='#FFD84D'
        d='m94.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L94.5 14.51l-6.172 4.484 2.358-7.256-6.172-4.483h7.629L94.5 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h21v19H0z' />
      </clipPath>
      <clipPath id='b'>
        <path fill='#fff' d='M21 0h21v19H21z' />
      </clipPath>
      <clipPath id='c'>
        <path fill='#fff' d='M42 0h21v19H42z' />
      </clipPath>
      <clipPath id='d'>
        <path fill='#fff' d='M63 0h21v19H63z' />
      </clipPath>
      <clipPath id='e'>
        <path fill='#fff' d='M84 0h21v19H84z' />
      </clipPath>
    </defs>
  </svg>
);
export default RevStars;
