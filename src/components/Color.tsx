import { Draggable } from 'react-beautiful-dnd';

export interface CardProps {
  id: any;
  hex: string;
  index: number;
  // moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export const DndColorCard = ({ id, hex, index }: CardProps) => {
  return (
    <Draggable draggableId={hex} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`color-list-item `}
          ref={provided.innerRef}
        >
          {hex}
        </div>
      )}
    </Draggable>
  );
};
