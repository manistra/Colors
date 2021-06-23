import { ColorItem } from './ColorItem';
import { Color } from '../types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Transition } from '@headlessui/react';

interface ColorListProps {
  changeCurrentColor: (newColor: Color) => void;
  changeColorList: (newColorHistory: Color[]) => void;
  colorList: Color[];
  currentColor: Color;
}

export const ColorList = ({
  changeCurrentColor,
  changeColorList,
  colorList,
  currentColor,
}: ColorListProps) => {
  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newColorList = [...colorList];
    newColorList.splice(source.index, 1);
    newColorList.splice(destination.index, 0, colorList[source.index]);
    changeColorList(newColorList);
  };

  const renderCard = (color: Color, index: number, selected: boolean) => {
    return (
      <ColorItem
        key={color.hex}
        index={index}
        hex={color.hex}
        onClick={() => changeCurrentColor(color)}
        selected={selected}
      />
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'id'}>
        {(provided) => (
          <Transition
            className='w-full h-5/6'
            show={!!colorList.length}
            enter='transform transition duration-1000'
            enterFrom='opacity-75 translate-y-20 scale-50'
            enterTo='opacity-100 translate-y-0 scale-100'
          >
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='color-list-container'
            >
              {colorList.map((color, i) =>
                renderCard(color, i, color.hex === currentColor.hex)
              )}
              {provided.placeholder}
            </div>
          </Transition>
        )}
      </Droppable>
    </DragDropContext>
  );
};
