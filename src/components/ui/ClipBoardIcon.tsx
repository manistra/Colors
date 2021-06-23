import { invertHex } from '../../helpers/hexHelper';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

interface ClipBoardIconProps {
  data: string;
}

export const ClipBoardIcon = ({ data }: ClipBoardIconProps) => {
  const [clipboardTooltipActive, setClipboardTooltipActive] =
    useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
    setClipboardTooltipActive(true);
    setTimeout(() => {
      setClipboardTooltipActive(false);
    }, 700);
  };

  return (
    <div className='relative'>
      <Transition
        show={clipboardTooltipActive}
        enter='transform transition duration-700'
        enterFrom='translate-y-0 scale-0 opacity-75'
        enterTo='scale-100 -translate-y-10  opacity-100'
        leave='transform duration-200 transition ease-in-out'
        leaveFrom='opacity-100 scale-100 -translate-y-10'
        leaveTo='opacity-0 scale-50 -translate-y-36'
      >
        <div className='absolute flex items-center p-2 text-xs font-thin text-gray-700 bg-white shadow-sm bg-opacity-80 rounded-xl -top-11 '>
          Copied to clipboard
        </div>
      </Transition>
      <Transition
        show={data !== ''}
        enter='transform transition duration-300'
        enterFrom='translate-x-96 -translate-y-96  scale-0 opacity-75'
        enterTo='scale-100 translate-x-0 translate-y-0 opacity-100'
      >
        <svg
          onClick={() => {
            copyToClipboard();
          }}
          xmlns='http://www.w3.org/2000/svg'
          className='inline ml-3 transition transform cursor-pointer w-14 h-14 md:w-16 md:h-16 lg:w-28 lg:h-28 hover:scale-110 active:scale-100'
          viewBox='0 0 20 20'
          fill={invertHex(data)}
          stroke='currentColor'
          strokeWidth='0%'
        >
          <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z' />
          <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z' />
        </svg>
      </Transition>
    </div>
  );
};
