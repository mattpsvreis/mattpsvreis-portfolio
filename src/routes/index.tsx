import { FC } from 'react';

import { Main } from '@/layouts/main';
import { Articles } from '@/pages/articles';
import { Piracy } from '@/pages/articles/piracy';
import { Landing } from '@/pages/landing';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/piracy' element={<Piracy />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};
