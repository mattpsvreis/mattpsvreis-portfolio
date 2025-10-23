import { FC, useEffect, useRef, useState } from 'react';

import { Footer } from '@/components/base/footer';
import { Navbar } from '@/components/base/navbar';
import scanlines from '@assets/images/scan-lines.png';

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const componentRef = useRef<HTMLElement>(null);

  const [screenSize, setScreenSize] = useState<number>();

  function getScreenSize() {
    if (componentRef.current) {
      setScreenSize(componentRef.current.clientHeight);
    }
  }

  useEffect(() => {
    getScreenSize();

    window.addEventListener('resize', getScreenSize);

    return () => window.removeEventListener('resize', getScreenSize);
  }, []);

  return (
    <main
      ref={componentRef}
      id='main'
      className='bg-main font-monaco flex min-h-screen w-full flex-col text-[22px] font-thin tracking-wide text-white'
    >
      <div
        id='scanlines-background'
        className={`fixed left-0 top-0 h-full w-full bg-cover`}
        style={{
          backgroundImage: `url(${scanlines})`,
          opacity: 0.1,
          filter: 'invert(1)',
          height: screenSize ? `${screenSize}px` : '100%',
        }}
      />
      <div
        id='color-overlay'
        className='fixed left-0 top-0 w-full'
        style={{
          backgroundColor: '#989bbd',
          mixBlendMode: 'multiply',
          height: screenSize ? `${screenSize}px` : '100%',
        }}
      />
      <div className='relative z-10'>
        <Navbar />
        <section
          id='content'
          className='min-h-full w-full text-underglow [&>p]:render-pixelated'
        >
          {children}
        </section>
        <Footer />
      </div>
    </main>
  );
};
