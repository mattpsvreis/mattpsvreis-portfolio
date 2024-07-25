import { FC } from 'react';

import pirateflag from '@assets/images/pirate-flag.png';

export const Footer: FC = () => {
  return (
    <div
      id='footer'
      className='bottom-0 flex w-full flex-row items-center justify-between px-8 pt-8 text-sm text-indigo-400 xl:fixed xl:items-end xl:pt-0'
    >
      <h1 id='copyright-text' className='pb-8'>
        Made by @mattpsvreis | 2024 ©
      </h1>
      <img
        src={pirateflag}
        alt=''
        className='h-16 xl:h-32 4xl:-mb-7 4xl:h-48'
      />
    </div>
  );
};
