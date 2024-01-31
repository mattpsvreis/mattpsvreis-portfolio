import { FC } from 'react';

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
    <div id='navbar-item' className='text-xl transition-all hover:scale-110'>
      <a href={href} target={target}>
        <button onClick={onClick}>{content}</button>
      </a>
    </div>
  );
};
