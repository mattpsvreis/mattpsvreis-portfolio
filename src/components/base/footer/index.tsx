import { FC } from 'react';

import pirateflag from '@assets/images/pirate-flag.png';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <div
      id='footer'
      className='bottom-0 flex w-full flex-row items-center justify-between px-8 pt-8 text-xl text-indigo-300 text-glow xl:fixed xl:items-end xl:pt-0'
    >
      <h1 id='copyright-text' className='xl:pb-4'>
        Made by @mattpsvreis | {new Date().getFullYear()} ©
      </h1>
      <Link to='/articles/piracy'>
        <img
          src={pirateflag}
          alt=''
          className='mb-2 h-20 xl:-mb-4 xl:h-36 4xl:-mb-7 4xl:h-52'
        />
      </Link>
    </div>
  );
};
