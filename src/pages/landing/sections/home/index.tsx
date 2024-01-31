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
        <SelfWritingText
          text={[
            'Olá! Seja bem-vindo(a) ao meu portfólio! =)',
            'Me chamo Mateus Reis, tenho 23 anos, e sou do Rio de Janeiro.',
            'Sou um Desenvolvedor Web Full-Stack, e estou em busca de novas oportunidades.',
          ]}
          delay={[1500, 2200, 2600]}
          className='text-center text-3xl'
        />
        <hr />
      </SectionWrapper>
    </Fragment>
  );
};
