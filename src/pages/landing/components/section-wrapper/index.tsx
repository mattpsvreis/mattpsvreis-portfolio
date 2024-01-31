import { FC, ReactNode } from 'react';

import clsx from 'clsx';

interface SectionWrapperProps {
  children: ReactNode;
  section: 'home' | 'about' | 'projects' | 'skills' | 'contact';
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  section,
}) => {
  return (
    <section
      id='about'
      className={clsx('h-screen px-16 pt-48', {
        'bg-about': section === 'about',
        'bg-projects': section === 'projects',
        'bg-skills': section === 'skills',
        'bg-contact': section === 'contact',
      })}
    >
      {children}
    </section>
  );
};
