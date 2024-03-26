import type { Metadata } from 'next';
import { Orbitron, Plus_Jakarta_Sans } from 'next/font/google';
import AOSAnimation from '@/utils/AosInit';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ether Edge Media',
  description:
    "Welcome to EtherEdge, where we redefine the possibilities of the decentralized world. As a powerhouse behind some of the most disruptive Web3 trailblazers, we don'\nt just recognize potential; we engineer it into unrivaled success, propelling your project to heights unattainable elsewhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${jakarta.variable} ${orbitron.variable}`}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
