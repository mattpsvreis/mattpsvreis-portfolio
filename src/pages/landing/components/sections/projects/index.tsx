import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../section-wrapper';
import { Title } from '../../title';

export const Projects: FC = () => {
  return (
    <Fragment>
      <SectionWrapper section='projects'>
        <Title content='Projetos' />
      </SectionWrapper>
      <hr />
    </Fragment>
  );
};
