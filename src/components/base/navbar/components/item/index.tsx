import { FC } from 'react';

type Icon = React.ReactNode;

interface NavbarItemProps {
  href: string;
  content: Icon | string;
  target: '_self' | '_blank';
}

export const NavbarItem: FC<NavbarItemProps> = ({ content, href, target }) => {
  return (
    <div id='navbar-item' className='text-lg transition-all hover:scale-110'>
      <a href={href} target={target}>
        {content}
      </a>
    </div>
  );
};
