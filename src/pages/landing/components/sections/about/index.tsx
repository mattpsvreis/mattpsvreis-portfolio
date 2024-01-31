import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../section-wrapper';
import { Title } from '../../title';

export const About: FC = () => {
  return (
    <Fragment>
      <SectionWrapper section='about'>
        <Title content='Sobre Mim' />
      </SectionWrapper>
      <hr />
    </Fragment>
  );
};
