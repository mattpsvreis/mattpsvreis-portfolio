import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div
      id='footer'
      className='fixed bottom-0 w-full px-8 pb-8 text-sm text-gray-500'
    >
      <h1 id='copyright-text'>Made by @mattpsvreis | 2024 ©</h1>
    </div>
  );
};
