import * as React from 'react';
import { SVGProps } from 'react';
const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={34}
    height={35}
    fill='none'
    {...props}
  >
    <path
      fill='#2D2D2D'
      d='m16.235.989 5.232 12.083L33.96 17.23l-12.083 5.232-4.16 12.493-5.231-12.083-12.493-4.159 12.083-5.232L16.235.989Z'
    />
  </svg>
);
export default Star;
