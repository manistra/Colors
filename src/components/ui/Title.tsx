import { useState, useEffect } from 'react';
import { Color } from '../../types';

interface TitleProps {
  titleText: string;
  currentColor: Color;
  colorList: Color[];
}
interface TitleLetter {
  hex: string;
  letter: string;
}

export const Title = ({ titleText, currentColor, colorList }: TitleProps) => {
  const [titleLetters, setTitleLetters] = useState<TitleLetter[]>([]);

  useEffect(() => {
    let titleArray: Array<TitleLetter> = [];
    titleText.split('').forEach((letter) => {
      titleArray.push({ hex: '#FFFFFF', letter: letter });
    });
    setTitleLetters([...titleArray]);
  }, []);

  useEffect(() => {
    if (colorList.length < 2) return;
    let titleArray: Array<TitleLetter> = [...titleLetters];
    titleArray.forEach((letter) => {
      letter.hex =
        colorList[Math.floor(Math.random() * (colorList.length - 1)) + 1].hex;
    });

    setTitleLetters(() => [...titleArray]);

    return () => {
      // Optional; clean up when `count` changed
    };
  }, [currentColor]);

  return (
    <h1 className='mt-5 lg:my-14 text-title'>
      {titleLetters.map((titleLetter, index) => (
        <span
          style={{
            color: titleLetter.hex,
          }}
          key={index}
        >
          {titleLetter.letter}
        </span>
      ))}
    </h1>
  );
};
