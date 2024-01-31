import { FC } from 'react';

interface TitleProps {
  content: string;
}

export const Title: FC<TitleProps> = ({ content }) => {
  return (
    <div className='w-full text-center text-4xl'>
      <h1 className=''>{content}</h1>
    </div>
  );
};
