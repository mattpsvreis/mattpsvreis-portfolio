// No need to import React in React 17 or later
import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

interface SelfWritingTextProps {
  text: string | string[];
  className?: string;
}

export const SelfWritingText: FC<SelfWritingTextProps> = ({
  text,
  className,
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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWriting) {
      if (Array.isArray(text)) {
        setCurrentText(text[currentTextIndex]);
      }

      if (typeof text === 'string') {
        setCurrentText(text);
      }

      const writeInterval = setInterval(() => {
        writeText();
      }, 50);

      return () => clearInterval(writeInterval);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    }

    if (isDeleting) {
      const unwriteInterval = setInterval(() => {
        unwriteText();
      }, 25);

      return () => {
        clearInterval(unwriteInterval);
        clearTimeout(timeout);
      };
    }

    if (timeout) {
      return () => clearTimeout(timeout);
    }
  }, [currentDisplayIndex, isWriting, isDeleting, text]);

  return <p className={clsx('', className)}>{displayText}</p>;
};
