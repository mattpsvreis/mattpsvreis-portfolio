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
        'absolute left-0 top-0 mt-16 flex w-full flex-col items-center justify-center gap-8 bg-black/95 py-8',
        'transition-all duration-300 sm:hidden',
        {
          '-translate-y-[200%] opacity-0': !menuOpen,
          'translate-y-0 opacity-100': menuOpen,
        }
      )}
    >
      {children}
    </div>
  );
};
