import { useState, useEffect } from 'react';
import { Color } from '../../types';

interface TitleProps {
  titleName: string;
  color: Color;
  colorHistory: Color[];
}
interface TitleLetter {
  hex: string;
  letter: string;
}

export const Title = ({ titleName, color, colorHistory }: TitleProps) => {
  const [titleLetters, setTitleLetters] = useState<TitleLetter[]>([]);

  useEffect(() => {
    let titleArray: Array<TitleLetter> = [];
    titleName.split('').forEach((letter) => {
      titleArray.push({ hex: '#FFFFFF', letter: letter });
    });
    setTitleLetters([...titleArray]);
  }, []);

  useEffect(() => {
    if (colorHistory.length < 2) return;
    let titleArray: Array<TitleLetter> = [...titleLetters];
    titleArray.forEach((letter) => {
      letter.hex =
        colorHistory[
          Math.floor(Math.random() * (colorHistory.length - 1)) + 1
        ].hex;
    });

    setTitleLetters(() => [...titleArray]);

    return () => {
      // Optional; clean up when `count` changed
    };
  }, [color]);

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
