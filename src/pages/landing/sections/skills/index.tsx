import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../components/section-wrapper';
import { Title } from '../../components/title';

export const Skills: FC = () => {
  return (
    <Fragment>
      <SectionWrapper section='skills'>
        <Title content='Skills' />
      </SectionWrapper>
      <hr />
    </Fragment>
  );
};
