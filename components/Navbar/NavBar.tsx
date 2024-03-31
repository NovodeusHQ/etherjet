'use client';

import React, { useState } from 'react';

// styles
import styles from './NavBar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '../BrandLogo';

interface ToggleState {
  [key: string]: boolean;
}

const NavBar = () => {
  const currentRoute = usePathname();

  const [toggle, setToggle] = useState<ToggleState>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const linkList = [
    { id: 0, title: 'Home', url: '/' },
    { id: 1, title: 'Work', url: '/#case-study' },
    // { id: 2, title: 'Team', url: '/team' },
    {
      id: 4,
      title: 'Contact',
      url: '/contact-us',
    },
    { id: 5, title: 'Blog', url: '/blog' },
    // { id: 6, title: 'Book Call', url: '/book-call' },
  ];

  return (
    <div>
      <section
        className={`${styles.navContainer} flex flex-row items-center justify-between`}
      >
        <nav className='flex container flex-row items-center justify-between'>
          {/* Hambuger icon */}
          <section
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? styles.open : styles.ham}
            id='navbar'
          >
            <span></span>
            <span></span>
            <span></span>
          </section>
          {/* Logo */}
          <section
            className={`flex flex-row  items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <div>
              <BrandLogo />
            </div>
          </section>
          <section
            className={`    ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className=' w-[95%] md:w-[50%] '>
              {/* nav Links */}

              <ul
                // data-aos='fade-right'
                // data-aos-duration='1500'
                className={` ${styles.navItems} flex flex-col ml-5 md:ml-[60px] `}
              >
                {linkList.map(({ id, title, url }) => (
                  <li
                    key={id}
                    className={currentRoute === url ? 'isActive ' : 'notActive'}
                  >
                    <Link onClick={() => handleToggle('navbar')} href={url}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
          <section data-aos='zoom-out' data-aos-duration='1500'>
            <select>
              <option>EN</option>
              <option>FR</option>
            </select>
          </section>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
