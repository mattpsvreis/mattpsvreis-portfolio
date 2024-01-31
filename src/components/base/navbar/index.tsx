import { FC } from 'react';

import * as Icon from 'react-icons/fa6';

import { NavbarItem } from './components/item';

export const Navbar: FC = () => {
  return (
    <nav
      id='navbar'
      className='fixed flex h-24 w-full flex-row items-center justify-between border-b-2 bg-black/60 px-16'
    >
      <div
        id='navbar-left'
        className='flex h-full w-1/2 items-center justify-start gap-8'
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
        className='flex h-full w-1/2 items-center justify-end gap-8'
      >
        <NavbarItem content='Home' href='#home' target='_self' />
        <NavbarItem content='Sobre Mim' href='#about' target='_self' />
        <NavbarItem content='Projetos' href='#projects' target='_self' />
        <NavbarItem content='Skills' href='#skills' target='_self' />
        <NavbarItem content='Contato' href='#contact' target='_self' />
      </div>
    </nav>
  );
};
