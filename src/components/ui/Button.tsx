import { Color } from '../../types';

interface ButtonProps {
  onClick: () => void;
  currentColor: Color;
}

export const Button = ({ onClick, currentColor }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className='btn'
      style={{
        WebkitTextStroke: '2px black',
        color: currentColor.hex,
      }}
    >
      {currentColor.hex}
    </button>
  );
};
