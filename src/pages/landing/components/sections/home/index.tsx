import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../section-wrapper';
import { Title } from '../../title';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper section='home'>
        <Title content='Home' />
      </SectionWrapper>
      <hr />
    </Fragment>
  );
};
