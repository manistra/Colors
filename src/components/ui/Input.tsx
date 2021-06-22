import { Color } from '../../types';
import {useState} from 'react'

interface InputProps {
  changeCurrentColor: (newColor: Color) => void;
  colors: Color[];
}

export const Input = ({ changeCurrentColor, colors }: InputProps) => {
  const [hexInput, setHexInput] = useState<string>('');
  const [hexInputError, setHexInputError] = useState<string>('');

  const submitHexInput = () => {
    let hex = hexInput;
    if (!hex.startsWith('#')) {
      hex = '#' + hexInput;
    }
    if (
      /#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/.test(hex).valueOf()
    ) {
      changeCurrentColor({ hex: hex.toLowerCase(), id: 0 });
    } else {
      console.log('invalid');

      setHexInputError('Please enter a valid color hex');
    }
  };
  return <div className="w-8/12"> 
    {colors.length  && (
      <div className='relative w-full'>
        {hexInputError !== '' && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 text-sm font-semibold text-red-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            {hexInputError}
          </div>
        )}
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
            />
          </svg>
        </span>
        <input
          onKeyDown={(e) => e.key === 'Enter' && submitHexInput()}
          onChange={(event) => {
            setHexInput(event.target.value);
            setHexInputError('');
          }}
          placeholder='FFFFFF'
          type='text'
          className='w-full h-12 p-2 pl-8 text-xl font-semibold uppercase border-2 border-gray-900 rounded lg:h-14 md:flex-1 '
        />
      </div>
    )  }
    </div>
};
