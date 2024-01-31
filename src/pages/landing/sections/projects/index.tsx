import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../components/section-wrapper';
import { Title } from '../../components/title';

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
