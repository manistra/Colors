import { Color } from '../../types';
import { invertHex } from '../../helpers/hexHelper';

interface ButtonProps {
  onClick: () => void;
  currentColor: Color;
}

export const Button = ({ onClick, currentColor }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-11/12 btn ${
        currentColor.hex === '' ? 'font-thin' : 'uppercase font-bold'
      }`}
      style={{
        backgroundColor: invertHex(currentColor.hex),
        color: currentColor.hex,
      }}
    >
      {currentColor.hex === '' ? 'Get Color' : currentColor.hex}
    </button>
  );
};
