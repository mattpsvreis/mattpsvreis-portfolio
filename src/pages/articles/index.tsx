import { FC, Fragment } from 'react';

import { SectionWrapper } from '../landing/components/section-wrapper';
import ArticleLink from './components/article-link';

export const Articles: FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Fragment>
        <SectionWrapper
          section='top'
          className='text-wider flex flex-col items-start justify-start lg:w-[68rem]'
        >
          <h1 className='self-center text-5xl'>my views are my own.</h1>
          <div className='mt-2 flex w-full flex-col gap-2 divide-y divide-dotted divide-gray-700/95 border-t border-dotted border-gray-700/95'>
            <ArticleLink
              href='/articles/piracy'
              title='In Defense of Piracy: Why Access Should Outweigh Ownership'
              dateCreated={new Date('2025-01-12')}
            />
          </div>
        </SectionWrapper>
      </Fragment>
    </div>
  );
};
