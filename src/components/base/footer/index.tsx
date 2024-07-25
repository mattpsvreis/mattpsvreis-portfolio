import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div
      id='footer'
      className='bottom-0 w-full px-8 pb-8 pt-8 text-sm text-indigo-400 xl:fixed xl:pt-0'
    >
      <h1 id='copyright-text'>Made by @mattpsvreis | 2024 ©</h1>
    </div>
  );
};
