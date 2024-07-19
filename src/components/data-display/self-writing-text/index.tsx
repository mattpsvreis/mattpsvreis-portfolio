import { FC, useEffect, useState } from 'react';

import '@styles/blinking-cursor.css';

interface ISelfWritingTextProps {
  text: string | string[];
  className?: string;
  speed?: 'fast' | 'medium' | 'slow';
  blinkingCursor?: boolean;
}

export const SelfWritingText: FC<ISelfWritingTextProps> = ({
  text,
  className,
  speed = 'medium',
  blinkingCursor = true,
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(() =>
    typeof text === 'string' ? text : text[0]
  );
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  const [isWriting, setIsWriting] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  function writeText() {
    if (currentDisplayIndex < currentText.length) {
      setDisplayText((prevText) =>
        prevText
          ? prevText + currentText[currentDisplayIndex]
          : currentText[currentDisplayIndex]
      );
      setCurrentDisplayIndex((prevIndex) => prevIndex + 1);
    } else {
      if (Array.isArray(text)) {
        if (currentTextIndex < text.length - 1) {
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentTextIndex(0);
        }
      }
      setIsWriting(false);
    }
  }

  function unwriteText() {
    if (currentDisplayIndex >= 0) {
      setDisplayText((prevText) => prevText.slice(0, -1));
      setCurrentDisplayIndex((prevIndex) => prevIndex - 1);
    } else {
      setDisplayText('');
      setIsDeleting(false);
      setIsWriting(true);
    }
  }

  function interpretSpeed(
    writing: boolean,
    speed: 'fast' | 'medium' | 'slow'
  ): number {
    switch (speed) {
      case 'fast':
        return writing ? 25 : 10;
      case 'medium':
        return writing ? 50 : 25;
      case 'slow':
        return writing ? 100 : 40;
      default:
        return writing ? 50 : 25;
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWriting) {
      if (Array.isArray(text)) {
        setCurrentText(text[currentTextIndex]);
      }

      if (typeof text === 'string') {
        setCurrentText(text);
      }

      const writeInterval = setInterval(
        () => {
          writeText();
        },
        interpretSpeed(true, speed)
      );

      return () => clearInterval(writeInterval);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, currentText.length * 35);
    }

    if (isDeleting) {
      const unwriteInterval = setInterval(
        () => {
          unwriteText();
        },
        interpretSpeed(false, speed)
      );

      return () => {
        clearInterval(unwriteInterval);
        clearTimeout(timeout);
      };
    }

    if (timeout) {
      return () => clearTimeout(timeout);
    }
  }, [currentDisplayIndex, isWriting, isDeleting, text]);

  return (
    <p className={className}>
      {displayText}
      {blinkingCursor && <span className='blinking-cursor'>|</span>}
    </p>
  );
};
