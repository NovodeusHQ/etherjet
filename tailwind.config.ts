// import { Orbitron, Plus_Jakarta_Sans } from 'next/font/google';
import type { Config } from 'tailwindcss';

// const orbitron = Orbitron({
//   subsets: ['latin'],
//   variable: '--font-orbitron',
//   display: 'swap',
// });

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   variable: '--font-jakarta',
//   display: 'swap',
// });

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './util/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontWeight: {
      //   thin: '100',
      //   hairline: '100',
      //   extralight: '200',
      //   light: '300',
      //   normal: '400',
      //   medium: '500',
      //   semibold: '600',
      //   bold: '700',
      //   extrabold: '800',
      //   'extra-bold': '800',
      //   black: '900',
      // },
      // fontFamily: {
      //   Plus_Jakarta_Sans: [jakarta.variable],
      //   Orbitron: [orbitron.variable],
      // },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
