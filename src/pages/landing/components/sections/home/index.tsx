import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../section-wrapper';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper
        section='home'
        className='flex items-center justify-center pt-24'
      >
        <p>SCROLLING TEXT</p>
      </SectionWrapper>
      <hr />
    </Fragment>
  );
};
