import { Draggable } from 'react-beautiful-dnd';

interface ColorItemProps {
  hex: string;
  index: number;
  onClick: () => void;
  selected: boolean;
}

export const ColorItem = ({
  hex,
  index,
  onClick,
  selected,
}: ColorItemProps) => {
  return (
    <Draggable draggableId={hex} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='m-1 bg-white rounded-md '
          onClick={() => {
            onClick();
          }}
          ref={provided.innerRef}
        >
          <div
            className={`relative color-list-item font-semibold ${
              selected ? 'font-bold border-2 text-lg' : 'text-md font-normal '
            }`}
            style={{
              borderColor: hex,
              backgroundColor: hex.slice() + '1A',
              color: hex,
            }}
          >
            <div
              className='inline-block w-4 h-4 mr-2 border-gray-900 shadow-lg border-1'
              style={{
                backgroundColor: hex,
              }}
            ></div>
            {hex}
          </div>
        </div>
      )}
    </Draggable>
  );
};
