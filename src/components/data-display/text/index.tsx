import { FC } from 'react';

import clsx from 'clsx';

interface TextProps {
  children: string;
  className?: string;
}

export const Text: FC<TextProps> = ({ children, className }) => {
  return <p className={clsx('', className)}>{children}</p>;
};
