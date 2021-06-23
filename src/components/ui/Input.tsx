import { Color } from '../../types';
import { useState } from 'react';
import { isHex, invertHex } from '../../helpers/hexHelper';
import { Transition } from '@headlessui/react';

interface InputProps {
  changeCurrentColor: (newColor: Color) => void;
  currentColor: Color;
  colorList: Color[];
}

export const Input = ({
  changeCurrentColor,
  currentColor,
  colorList,
}: InputProps) => {
  const [hexInput, setHexInput] = useState<string>('');
  const [hexInputError, setHexInputError] = useState<string>('');

  const submitHexInput = () => {
    let hex = hexInput;
    if (!hex.startsWith('#')) {
      hex = '#' + hexInput;
    }
    if (isHex(hex)) {
      changeCurrentColor({ hex: hex.toLowerCase(), id: 0 });
    } else {
      console.log('invalid');

      setHexInputError('Please enter a valid color hex');
    }
  };
  return (
    <div className='w-full lg:w-10/12'>
      <Transition
        show={currentColor.hex !== ''}
        enter='transform transition duration-700'
        enterFrom='opacity-75 -translate-x-96 scale-95'
        enterTo='opacity-100 translate-x-0 scale-100'
      >
        <div className='relative w-full'>
          {hexInputError !== '' && (
            <div className='absolute inset-y-0 flex items-center pr-3 text-sm font-semibold text-red-700 right-1/4'>
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
          <div
            className='absolute right-0 z-10 flex items-center justify-center w-2/12 h-full transition transform border-t-2 border-b-2 border-r-2 border-gray-900 rounded-r cursor-pointer active:scale-95 hover:border-opacity-0 hover:scale-105 md:w-1/12 lg:w-1/12'
            style={{ backgroundColor: invertHex(currentColor.hex) }}
            onClick={() => {
              submitHexInput();
            }}
          >
            <svg
              style={{ color: currentColor.hex }}
              xmlns='http://www.w3.org/2000/svg'
              className='w-3/4 h-3/4 hover:scale-105'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </div>
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
            className='input'
          />
        </div>
      </Transition>
    </div>
  );
};
