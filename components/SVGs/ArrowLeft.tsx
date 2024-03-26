import * as React from 'react';
import { SVGProps } from 'react';
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={65}
    height={64}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <circle cx={-17.5} cy={72} r={26} fill='url(#b)' />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='m35.5 38-5.685-5.293a.952.952 0 0 1 0-1.414L35.5 26'
      />
    </g>
    <rect width={63} height={63} x={1} y={0.5} stroke='url(#c)' rx={31.5} />
    <rect width={63} height={63} x={1} y={0.5} stroke='url(#d)' rx={31.5} />
    <rect width={63} height={63} x={1} y={0.5} stroke='url(#e)' rx={31.5} />
    <defs>
      <radialGradient
        id='b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(125.815 -13.69 29.922) scale(64.4539 58.7228)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#7388FF' />
        <stop offset={0.503} stopColor='#CA73FF' />
        <stop offset={1} stopColor='#FF739D' />
      </radialGradient>
      <radialGradient
        id='c'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(-132.581 23.277 8.864) scale(60.3461 46.814)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='d'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(38.4 33.00566 -23.70833 27.58315 32.5 32)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E733E0' />
        <stop offset={1} stopColor='#E733E0' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='e'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(-35.07222 33.91975 -25.33552 -26.19633 32.5 32)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5336E2' />
        <stop offset={1} stopColor='#5336E2' stopOpacity={0} />
      </radialGradient>
      <clipPath id='a'>
        <rect width={64} height={64} x={0.5} fill='#fff' rx={32} />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowLeft;
