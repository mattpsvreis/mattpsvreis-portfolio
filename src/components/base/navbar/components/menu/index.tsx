import { FC, ReactNode } from 'react';

import clsx from 'clsx';

interface NavbarMenuProps {
  menuOpen: boolean;
  children: ReactNode;
}

export const NavbarMenu: FC<NavbarMenuProps> = ({ menuOpen, children }) => {
  return (
    <div
      id='navbar-menu'
      className={clsx(
        'absolute right-0 top-0 mt-16 flex h-screen flex-col items-end justify-start gap-6 bg-black/95 px-8 pt-8',
        'transition-all duration-300 sm:hidden',
        {
          'translate-x-[200%] opacity-0': !menuOpen,
          'translate-x-0 opacity-100': menuOpen,
        }
      )}
    >
      {children}
    </div>
  );
};
