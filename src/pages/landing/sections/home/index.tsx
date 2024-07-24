import { FC, Fragment } from 'react';

import { SelfWritingText } from '@/components/data-display/self-writing-text';
import * as Icon from 'react-icons/fa6';

import '@styles/blinking-arrow.css';

import { SectionWrapper } from '../../components/section-wrapper';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper
        section='top'
        className='flex items-center justify-center pt-24'
      >
        <SelfWritingText
          blinkingCursor
          text={[
            'Olá! Seja bem-vindo(a) ao meu portfólio! =)',
            'Me chamo Mateus Reis, tenho 23 anos, e sou do Rio de Janeiro.',
            'Sou um Desenvolvedor Web Full-Stack, e estou em busca de novas oportunidades.',
          ]}
          speed='medium'
          className='-mt-24 text-center text-3xl'
        />
      </SectionWrapper>
      <div className='flex items-center justify-center'>
        <a href='#about' target='_self'>
          <Icon.FaArrowDown size={36} className='blinking-arrow -mt-16' />
        </a>
      </div>
      <hr />
    </Fragment>
  );
};
