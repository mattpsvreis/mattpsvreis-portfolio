import { FC } from 'react';

import { Footer } from '@/components/base/footer';
import { Navbar } from '@/components/base/navbar';
import scanlines from '@assets/images/scan-lines.png';

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main
      id='main'
      className='bg-main flex min-h-screen w-full flex-col font-mono text-indigo-400 text-glow'
    >
      <div
        id='glass-pane-background'
        className='absolute left-0 top-0 h-full w-full bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${scanlines})`,
          opacity: 0.07,
          filter: 'invert(1)',
        }}
      />
      <div
        id='color-overlay'
        className='absolute left-0 top-0 h-full w-full'
        style={{
          backgroundColor: '#d9d9ff',
          mixBlendMode: 'multiply',
        }}
      />
      <div className='relative z-10'>
        <Navbar />
        <section id='content' className='min-h-full w-full'>
          {children}
        </section>
        <Footer />
      </div>
    </main>
  );
};
