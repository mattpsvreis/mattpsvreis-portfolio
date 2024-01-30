import { FC } from 'react';

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main id='main' className='flex min-h-screen w-screen flex-col'>
      <div
        id='navbar'
        className='align-center fixed flex h-16 w-full flex-row justify-between px-8'
      >
        <div id='navbar-left' className='flex h-full w-1/2 justify-start'>
          <div id='navbar-item' className='h-full'>
            <h1 id='navbar-item-text' className='text-center'>
              Navbar
            </h1>
          </div>
        </div>
        <div id='navbar-right' className='flex h-full w-1/2 justify-end'>
          <div id='navbar-item' className='h-full'>
            <h1 id='navbar-item-text' className='text-center'>
              Navbar navbar navbar navbar navbar navbar navbar navbar navbar
            </h1>
          </div>
        </div>
      </div>
      <section id='content' className='mt-16 w-full px-8'>
        {children}
      </section>
    </main>
  );
};
