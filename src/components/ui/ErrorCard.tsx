import { Transition } from '@headlessui/react';

interface TitleProps {
  errorMsg: string;
}

export const ErrorCard = ({ errorMsg }: TitleProps) => {
  let errorMessage = '';

  if (errorMsg !== '') errorMessage = errorMsg.slice();

  return (
    <Transition
      show={errorMsg !== ''}
      enter='transform transition duration-500'
      enterFrom='opacity-20 -translate-y-10'
      enterTo='opacity-100 -translate-y-0'
      leave='transform duration-75 transition ease-in-out'
      leaveFrom='opacity-100 scale-100 translate-y-0 translate-x-0'
      leaveTo='opacity-0  scale-100 -translate-x-20'
    >
      <div className='flex items-center justify-center px-5 text-xs text-gray-900 left-2 lg:w-auto lg:left-2 top-2 lg:text-base py-7 error-card'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-3 text-red-700 w-7 h-7'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        {errorMessage}
      </div>
    </Transition>
  );
};
