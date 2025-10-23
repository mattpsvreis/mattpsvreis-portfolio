import { FC } from 'react';

import { Main } from '@/layouts/main';
import { Landing } from '@/pages/landing';
import { Piracy } from '@/pages/piracy';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/articles'>
            <Route index element={<Navigate to='/' />} />
            <Route path='piracy' element={<Piracy />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};
