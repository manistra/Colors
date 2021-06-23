import { Draggable } from 'react-beautiful-dnd';
import { Transition } from '@headlessui/react';

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
        <Transition
          show={true}
          enter='transform transition duration-300'
          enterFrom='-translate-y-28 opacity-20'
          enterTo='translate-x-0 opacity-100'
        >
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className='m-1 bg-white bg-opacity-50 rounded-md '
            onClick={() => {
              onClick();
            }}
            ref={provided.innerRef}
          >
            <div
              className={`relative color-list-item backdrop-filter backdrop-blur ${
                selected
                  ? 'font-bold border-2 text-lg'
                  : 'text-md font-semibold '
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
        </Transition>
      )}
    </Draggable>
  );
};
