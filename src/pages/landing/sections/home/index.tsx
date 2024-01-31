import { FC, Fragment } from 'react';

import { SelfWritingText } from '@/components/data-display/self-writing-text';

import { SectionWrapper } from '../../components/section-wrapper';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper
        section='home'
        className='flex items-center justify-center pt-24'
      >
        <SelfWritingText text={['SCROLLING TEXT', 'TEXT 2']} />
        <hr />
      </SectionWrapper>
    </Fragment>
  );
};
