interface TitleProps {
  name: string;
}

export const Title = ({ name }: TitleProps) => {
  return <h1 className='my-2 lg:my-14 text-title'>{name}</h1>;
};
