// No need to import React in React 17 or later
import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

interface SelfWritingTextProps {
  text: string;
  className?: string;
}

export const SelfWritingText: FC<SelfWritingTextProps> = ({
  text,
  className,
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isWriting, setIsWriting] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  function writeText() {
    if (currentIndex < text.length) {
      setDisplayText((prevText) =>
        prevText ? prevText + text[currentIndex] : text[currentIndex]
      );
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsWriting(false);
    }
  }

  function unwriteText() {
    if (currentIndex >= 0) {
      setDisplayText((prevText) => prevText.slice(0, -1));
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setDisplayText('');
      setIsDeleting(false);
      setIsWriting(true);
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWriting) {
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
  }, [currentIndex, isWriting, isDeleting, text]);

  return <p className={clsx('', className)}>{displayText}</p>;
};
