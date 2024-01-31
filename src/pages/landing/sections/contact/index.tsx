import { FC } from 'react';

import { SectionWrapper } from '../../components/section-wrapper';
import { Title } from '../../components/title';

export const Contact: FC = () => {
  return (
    <SectionWrapper section='contact'>
      <Title content='Contato' />
    </SectionWrapper>
  );
};
