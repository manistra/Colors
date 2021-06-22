import { ColorItem } from './ColorItem';
import { Color } from '../types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface ColorListProps {
  changeCurrentColor: (newColor: Color) => void;
  changeColorHistory: (newColorHistory: Color[]) => void;
  colors: Color[];
  currentColor: Color;
}

export const ColorList = ({
  changeCurrentColor,
  changeColorHistory,
  colors,
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

    const newColorList = [...colors];
    newColorList.splice(source.index, 1);
    newColorList.splice(destination.index, 0, colors[source.index]);
    changeColorHistory(newColorList);
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
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='color-list-container'
          >
            {colors.map((color, i) =>
              renderCard(color, i, color.hex === currentColor.hex)
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
