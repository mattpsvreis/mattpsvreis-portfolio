import { FC } from 'react';

import { Footer } from '@/components/base/footer';
import { Navbar } from '@/components/base/navbar';

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main
      id='main'
      className='font-roboto bg-main flex min-h-screen w-screen flex-col text-white'
    >
      <Navbar />
      <section id='content' className='mt-24 min-h-full w-full px-16'>
        {children}
      </section>
      <Footer />
    </main>
  );
};
