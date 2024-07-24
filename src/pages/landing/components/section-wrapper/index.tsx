import { FC, ReactNode } from 'react';

import clsx from 'clsx';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  section: 'top' | 'middle' | 'bottom';
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  section,
  className,
}) => {
  return (
    <section
      id={section}
      className={clsx(
        'h-screen px-8 sm:px-16',
        {
          'pt-24 sm:pt-36': section !== 'middle',
        },
        className
      )}
    >
      {children}
    </section>
  );
};
