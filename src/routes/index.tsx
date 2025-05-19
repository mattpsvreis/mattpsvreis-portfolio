import { FC } from 'react';

import { Main } from '@/layouts/main';
import { Landing } from '@/pages/landing';
import { Piracy } from '@/pages/piracy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/piracy' element={<Piracy />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};
