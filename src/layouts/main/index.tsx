import { FC } from 'react';

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main id='main' className='flex min-h-full w-full flex-col'>
      <div
        id='navbar'
        className='fixed flex h-32 w-full flex-col justify-between'
      >
        <div id='navbar-item' className='w-1/2'>
          <h1>Navbar</h1>
        </div>
        <div id='navbar-item' className='w-1/2'>
          <h1>Navbar</h1>
        </div>
      </div>
      <section id='content' className='h-full w-full'>
        {children}
      </section>
    </main>
  );
};
