import { FC, ReactNode } from 'react';

import clsx from 'clsx';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  section: 'home' | 'about' | 'projects' | 'skills' | 'contact';
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
        'h-screen px-16',
        {
          'bg-about': section === 'about',
          'bg-projects': section === 'projects',
          'bg-skills': section === 'skills',
          'bg-contact': section === 'contact',
          'pt-24': section === 'home',
          'pt-48': section !== 'home',
        },
        className
      )}
    >
      {children}
    </section>
  );
};
