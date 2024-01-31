import { FC, Fragment } from 'react';

import { SectionWrapper } from '../../section-wrapper';
import { Title } from '../../title';

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
