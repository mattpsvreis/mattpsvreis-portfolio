import { FC, Fragment } from 'react';

import ToolTip from '@/components/data-display/tooltip';
import pp from '@assets/images/pp.jpg';
import { Link } from 'react-router-dom';

// import { SelfWritingText } from '@/components/data-display/self-writing-text';
import '@styles/blinking-arrow.css';

import { SectionWrapper } from '../../components/section-wrapper';

export const Home: FC = () => {
  const age: number = getAge();

  function getAge() {
    if (new Date().getMonth() < new Date(2000, 10, 8).getMonth()) {
      return new Date().getFullYear() - 2000 - 1;
    } else {
      return new Date().getFullYear() - 2000;
    }
  }

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
              <p className='text-2xl text-glow'>mattpsvreis 🏴‍☠️</p>
              <div>
                <p className='text-glow'>
                  <b>Mateus Reis</b>, {age} yo, RJ - Brazil
                </p>
                <p>
                  <ToolTip anchorSelect='#fullstack-anchor' placement='top'>
                    <p className='italic text-indigo-100 text-glow'>
                      Frontend, Backend, DevSecOps, Databases, Infrastructure,
                      and Scripting.
                    </p>
                  </ToolTip>
                  <span id='fullstack-anchor'>Fullstack</span> Software
                  Engineer, AI Enthusiast, and Technical Trailblazer
                </p>
              </div>
              <p>
                {'> currently working as a Mid-Level Software Engineer @ '}
                <b className='text-glow'>{'PagBank '}</b>
                <i>{'(via Invillia)'}</i>
              </p>
              <p>
                {'>'} Three years of professional experience developing varied
                and complex production-ready applications such as a web mobile
                gaming app, an intranet app for monitoring integrations with
                solutions to either manually or automatically resolving payload
                errors, administrative panels, dashboards and graphs, forums and
                wikis frameworks, Discord bots, gaming mods, shell scripts, and
                various types of e-commerces.'
              </p>
              <a
                href='https://open.spotify.com/user/2233hoxe7q3q2oxj472qllrba?si=4b0716d193f74067'
                target='_blank'
                className='text-lg underline'
              >
                <i className='font-bold text-glow'>
                  🪄 some music I listen to 🎶
                </i>
              </a>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-6'>
            <div className='flex flex-col items-start justify-start gap-4'>
              <p>
                <b>main tech stack :</b>{' '}
                <i>
                  <ToolTip anchorSelect='#react-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A JavaScript framework for responsive and interactive web
                      development.
                    </p>
                  </ToolTip>
                  <span className='font-bold text-glow' id='react-anchor'>
                    React
                  </span>
                  ,{' '}
                  <ToolTip anchorSelect='#typescript-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A JavaScript superset meant to add Developer Experience
                      focused functionalities such as Static Typing.
                    </p>
                  </ToolTip>
                  <span className='font-bold text-glow' id='typescript-anchor'>
                    TypeScript
                  </span>
                  ,{' '}
                  <ToolTip anchorSelect='#node-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A JavaScript framework for server-side development,
                      providing the necessary tools to create lightweight and
                      simple APIs.
                    </p>
                  </ToolTip>
                  <span className='font-bold text-glow' id='node-anchor'>
                    Node
                  </span>
                  ,{' '}
                  <ToolTip anchorSelect='#next-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A React framework for server-side rendering and integrated
                      backend-for-frontend development.
                    </p>
                  </ToolTip>
                  <span id='next-anchor'>Next</span>,{' '}
                  <ToolTip anchorSelect='#postgres-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A robust SQL based relational database.
                    </p>
                  </ToolTip>
                  <span id='postgres-anchor'>PostgreSQL</span>,{' '}
                  <ToolTip anchorSelect='#docker-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      The solution to build, share, run, and verify apps with
                      pre-built environment configuration.
                    </p>
                  </ToolTip>
                  <span id='docker-anchor'>Docker</span>,{' '}
                  <ToolTip anchorSelect='#kafka-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A robust and feature rich messenger queue solution.
                    </p>
                  </ToolTip>
                  <span id='kafka-anchor'>Apache Kafka</span>,{' '}
                  <ToolTip anchorSelect='#openai-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      The top hotspot for any open-source AI related products.
                    </p>
                  </ToolTip>
                  <span id='openai-anchor'>OpenAI</span>,{' '}
                  <ToolTip anchorSelect='#aws-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      A cloud service offering a wide range of services for
                      computing, storage, and more.
                    </p>
                  </ToolTip>
                  <span id='aws-anchor'>AWS</span>,{' '}
                  <ToolTip anchorSelect='#lua-anchor' placement='top'>
                    <p className='text-indigo-100 text-glow'>
                      The all-rounder scripting language for every game modding
                      necessity.
                    </p>
                  </ToolTip>
                  <span id='lua-anchor'>LUA</span>
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
                  been using tech gadgets since I was 6; been programming since
                  I was 12
                </i>
              </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-4'>
              <p>
                <i>↓ will update soon</i>
              </p>
              <ul className='flex list-disc flex-col gap-2'>
                <li className='ml-8 text-glow'>
                  <b>take a look at : </b>
                </li>
                <ul className='z-20 flex list-disc flex-col gap-2'>
                  <li className='ml-16 list-circle'>
                    <Link
                      to='/experience'
                      target='_blank'
                      className='underline'
                    >
                      {'my work experience... >'}
                    </Link>
                  </li>
                  <li className='ml-16 list-circle'>
                    <Link to='/projects' target='_blank' className='underline'>
                      {'my personal projects... >'}
                    </Link>
                  </li>
                  <li className='ml-16 list-circle'>
                    <Link to='/articles' target='_blank' className='underline'>
                      {'my articles... >'}
                    </Link>
                  </li>
                  <li className='ml-16 list-circle'>
                    <Link
                      to='/articles/whoami'
                      target='_blank'
                      className='underline'
                    >
                      {'my story on how I became a programmer... >'}
                    </Link>
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
