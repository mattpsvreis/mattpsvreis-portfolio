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
        'min-h-screen px-8 sm:px-16',
        {
          'pb-4 pt-24 sm:pb-12 sm:pt-[94px]': section !== 'middle',
        },
        className
      )}
    >
      {children}
    </section>
  );
};
