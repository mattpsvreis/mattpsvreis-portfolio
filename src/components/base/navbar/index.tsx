import { FC, useEffect, useState } from 'react';

import MusicPlayer from '@/components/data-input/music-player';
import favicon from '@assets/svgs/favicon.svg';
import clsx from 'clsx';
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaX,
} from 'react-icons/fa6';

import { NavbarItem } from './components/item';
import { NavbarMenu } from './components/menu';

export const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  return (
    <nav
      id='navbar'
      className={clsx(
        'fixed flex h-20 w-full flex-row items-center justify-between px-8 transition-colors duration-300 ease-in-out md:h-24 md:px-[420px]',
        { 'bg-black/95': menuOpen },
        { 'bg-black/95': scrollY > 0 }
      )}
    >
      <div
        id='navbar-left'
        className='hidden h-full w-1/2 items-center justify-start gap-8 sm:flex'
      >
        <NavbarItem
          content={<img src={favicon} className='h-20' />}
          href='/'
          target='_self'
        />
      </div>
      <MusicPlayer />
      <div
        id='navbar-right'
        className='hidden h-full w-1/2 items-center justify-end gap-8 sm:flex'
      >
        <NavbarItem
          content={<FaGithub size={32} />}
          href='https://github.com/mattpsvreis'
          target='_blank'
        />
        <NavbarItem
          content={<FaLinkedin size={32} />}
          href='https://www.linkedin.com/in/mateuspsvreis'
          target='_blank'
        />
        <NavbarItem
          content={<FaEnvelope size={32} />}
          href='mailto:mateuspsvreis@gmail.com'
          target='_blank'
        />
        <NavbarItem
          content={<FaWhatsapp size={32} />}
          href='https://wa.me/5524993209529'
          target='_blank'
        />
      </div>
      <div id='navbar-hamburger' className='flex w-full justify-end sm:hidden'>
        <button onClick={handleMenu}>
          {menuOpen ? <FaX size={32} /> : <FaBars size={32} />}
        </button>
      </div>
      <NavbarMenu menuOpen={menuOpen}>
        <NavbarItem
          content='Home'
          onClick={handleMenu}
          href='/'
          target='_self'
        />
        <NavbarItem
          content='Projects'
          onClick={handleMenu}
          href='/projects'
          target='_self'
        />
        <NavbarItem
          content='Articles'
          onClick={handleMenu}
          href='/articles'
          target='_self'
        />
      </NavbarMenu>
    </nav>
  );
};
