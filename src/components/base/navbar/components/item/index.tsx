import { FC } from 'react';

import { Link } from 'react-router-dom';

type Icon = React.ReactNode;

interface NavbarItemProps {
  href: string;
  content: Icon | string;
  target: '_self' | '_blank';
  onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = ({
  content,
  href,
  target,
  onClick,
}) => {
  return (
    <div id='navbar-item' className='text-2xl transition-all hover:scale-110'>
      <Link to={href} target={target}>
        <button onClick={onClick}>{content}</button>
      </Link>
    </div>
  );
};
