import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../components/section-wrapper';
import { Title } from '../../components/title';

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
