import { FC, Fragment } from 'react';

import pp from '@assets/images/pp.jpg';

// import { SelfWritingText } from '@/components/data-display/self-writing-text';
import '@styles/blinking-arrow.css';

import { SectionWrapper } from '../../components/section-wrapper';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper
        section='top'
        className='flex max-w-6xl flex-col items-start justify-start'
      >
        <div className='flex w-full flex-col items-start justify-start gap-6'>
          <div className='flex w-full flex-col items-start justify-start gap-6 xl:flex-row 4xl:flex-col'>
            <img src={pp} alt='' className='h-64 4xl:self-center' />
            <div className='flex flex-col items-start justify-start gap-4'>
              <a href='' target='_blank' className='text-2xl'>
                mattpsvreis 🏴‍☠️
              </a>
              <div>
                <p>
                  <b>Mateus Reis</b>, 23 yo, RJ - Brazil
                </p>
                <p>
                  Fullstack Web Developer, AI Enthusiast, and Technical
                  Trailblazer
                </p>
              </div>
              <p>
                {'> currently working as a Frontend Developer @ '}
                <b>{'Atomos Oficial'}</b>
              </p>
              <a href='' target='_blank' className='text-lg underline'>
                <i>🪄 some music I listen to 🎶</i>
              </a>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-6'>
            <div className='flex flex-col items-start justify-start gap-4'>
              <p>
                <b>tech stack :</b>{' '}
                <i>
                  React, Next, TypeScript, Node, TailwindCSS, PostgreSQL,
                  Docker, Apache Kafka, OpenAI, AWS
                </i>
              </p>
              <p>
                <b>hobbies : </b>{' '}
                <i>
                  board games, gaming, drifting, anime, travelling, music,
                  sci-fi shows/movies, comedy shows/movies, writing
                </i>
              </p>
              <p>
                <b>curiosities : </b>{' '}
                <i>
                  I've been a Counter-Strike Pro Player before; I'm a musicist;
                  been using tech gadgets since I was 6
                </i>
              </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-4'>
              <p>
                <i>↓ will update soon</i>
              </p>
              <ul className='flex list-disc flex-col gap-2'>
                <li className='ml-8'>
                  <b>take a look at : </b>
                </li>
                <ul className='flex list-disc flex-col gap-2'>
                  <li className='ml-16 list-circle'>
                    <a href='' target='_blank' className='underline'>
                      {'my projects... >'}
                    </a>
                  </li>
                </ul>
                <li className='ml-8'>
                  <b>my links : </b>
                </li>
                <ul className='flex list-disc flex-col gap-2'>
                  <li className='ml-16 list-circle'>
                    <a href='' target='_blank' className='underline'>
                      GitHub
                    </a>
                  </li>
                  <li className='ml-16 list-circle'>
                    <a href='' target='_blank' className='underline'>
                      LinkedIn
                    </a>
                  </li>
                  <li className='ml-16 list-circle'>
                    <a href='' target='_blank' className='underline'>
                      Twitter
                    </a>
                  </li>
                  <li className='ml-16 list-circle'>
                    <a href='' target='_blank' className='underline'>
                      Insta
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Fragment>
  );
};
