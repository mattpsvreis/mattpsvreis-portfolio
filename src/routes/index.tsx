import { FC } from 'react';

import { Main } from '@/layouts/main';
import { Landing } from '@/pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};
