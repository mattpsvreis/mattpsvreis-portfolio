import { FC } from 'react';

import { Home } from './sections/home';

export const Landing: FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Home />
    </div>
  );
};
