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
      className='bg-main flex min-h-screen w-full flex-col font-mono text-white'
    >
      <Navbar />
      <section id='content' className='min-h-full w-full'>
        {children}
      </section>
      <Footer />
    </main>
  );
};
