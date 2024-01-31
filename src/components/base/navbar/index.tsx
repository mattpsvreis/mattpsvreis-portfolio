import { FC, useState } from 'react';

import clsx from 'clsx';
import * as Icon from 'react-icons/fa6';

import { NavbarItem } from './components/item';
import { NavbarMenu } from './components/menu';

export const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav
      id='navbar'
      className={clsx(
        'fixed flex h-16 w-full flex-row items-center justify-between border-b-2 px-8 sm:h-24 sm:px-16',
        { 'bg-black/95': menuOpen, 'bg-black/60': !menuOpen }
      )}
    >
      <div
        id='navbar-left'
        className='hidden h-full w-1/2 items-center justify-start gap-8 sm:flex'
      >
        <NavbarItem
          content={<Icon.FaGithub size={32} />}
          href='https://github.com/mattpsvreis'
          target='_blank'
        />
        <NavbarItem
          content={<Icon.FaLinkedin size={32} />}
          href='https://www.linkedin.com/in/mateuspsvreis'
          target='_blank'
        />
        <NavbarItem
          content={<Icon.FaEnvelope size={32} />}
          href='mailto:mateuspsvreis@gmail.com'
          target='_blank'
        />
        <NavbarItem
          content={<Icon.FaWhatsapp size={32} />}
          href='https://wa.me/5524993209529'
          target='_blank'
        />
      </div>
      <div
        id='navbar-right'
        className='hidden h-full w-1/2 items-center justify-end gap-8 sm:flex'
      >
        <NavbarItem content='Home' href='#home' target='_self' />
        <NavbarItem content='Sobre Mim' href='#about' target='_self' />
        <NavbarItem content='Projetos' href='#projects' target='_self' />
        <NavbarItem content='Skills' href='#skills' target='_self' />
        <NavbarItem content='Contato' href='#contact' target='_self' />
      </div>
      <div id='navbar-hamburger' className='flex w-full justify-end sm:hidden'>
        <button onClick={handleMenu}>
          {menuOpen ? <Icon.FaX size={32} /> : <Icon.FaBars size={32} />}
        </button>
      </div>
      <NavbarMenu menuOpen={menuOpen}>
        <NavbarItem
          content='Home'
          onClick={handleMenu}
          href='#home'
          target='_self'
        />
        <NavbarItem
          content='Sobre Mim'
          onClick={handleMenu}
          href='#about'
          target='_self'
        />
        <NavbarItem
          content='Projetos'
          onClick={handleMenu}
          href='#projects'
          target='_self'
        />
        <NavbarItem
          content='Skills'
          onClick={handleMenu}
          href='#skills'
          target='_self'
        />
        <NavbarItem
          content='Contato'
          onClick={handleMenu}
          href='#contact'
          target='_self'
        />
      </NavbarMenu>
    </nav>
  );
};
