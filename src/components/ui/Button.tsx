import { Color } from '../../types';
import { invertHex } from '../../helpers/hexHelper';
import { useState } from 'react';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  currentColor: Color;
}

export const Button = ({ buttonText, onClick, currentColor }: ButtonProps) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [buttonClickedRecently, setButtonClickedRecently] =
    useState<boolean>(false);

  const onButtonClick = () => {
    if (!buttonClickedRecently) {
      setButtonClickedRecently(true);
      setTimeout(() => {
        setButtonClickedRecently(false);
      }, 600);
    }
    if (buttonDisabled) return;
    else {
      setButtonDisabled(true);
      setTimeout(
        () => {
          onClick();
          setButtonDisabled(false);
        },
        buttonClickedRecently ? 600 : 0
      );
    }
  };

  return (
    <button
      onClick={() => {
        onButtonClick();
      }}
      className={`w-11/12 btn ${
        currentColor.hex === ''
          ? 'font-extralight border-2 border-gray-900'
          : 'uppercase font-bold shadow'
      }`}
      style={{
        backgroundColor: invertHex(currentColor.hex),
        color: currentColor.hex,
      }}
    >
      {currentColor.hex === '' ? 'Get Color' : buttonText}
    </button>
  );
};
