import { FC, Fragment } from 'react';

import { SelfWritingText } from '@/components/data-display/self-writing-text';

import '@styles/blinking-arrow.css';

import { SectionWrapper } from '../../components/section-wrapper';

export const Home: FC = () => {
  return (
    <Fragment>
      <SectionWrapper
        section='top'
        className='flex max-w-3xl items-center justify-center pt-24'
      >
        <SelfWritingText
          blinkingCursor
          text={[
            `Hey there, stranger! =)`,
            `My name's Mateus Reis, I'm 23, and I'm a Fullstack Web Developer, AI Enthusiast, and Technical Trailblazer.`,
            `I have three years of experience developing complex applications of varied sizes.`,
            `I'm always looking for new challenges and opportunities to grow my skills and knowledge, feel free to reach out if you're interested. ;)`,
          ]}
          speed='medium'
          className='-mt-24 text-center text-3xl'
        />
      </SectionWrapper>
      {/* <div className='flex items-center justify-center'>
        <a href='#about' target='_self'>
          <FaArrowDown size={36} className='blinking-arrow -mt-16' />
        </a>
      </div> */}
    </Fragment>
  );
};
