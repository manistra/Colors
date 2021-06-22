interface ClipBoardIconProps {
  data: string;
}

export const ClipBoardIcon = ({ data }: ClipBoardIconProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
  };
  return (
    <svg
      onClick={() => {
        copyToClipboard();
      }}
      xmlns='http://www.w3.org/2000/svg'
      className='inline ml-3 transition transform cursor-pointer w-28 h-28 hover:scale-110 active:scale-100 '
      viewBox='0 0 20 20'
      fill='white'
      stroke='currentColor'
      strokeWidth='2%'
    >
      <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z' />
      <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z' />
    </svg>
  );
};
