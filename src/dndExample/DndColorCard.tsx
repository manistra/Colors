import { FC, useRef, useState, useEffect } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { XYCoord } from 'dnd-core';
import { isMobile } from 'react-device-detect';

export interface CardProps {
  id: any;
  hex: string;
  index: number;
  parentRef: React.RefObject<HTMLDivElement>;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const DndColorCard: FC<CardProps> = ({
  id,
  hex,
  index,
  parentRef,
  moveCard,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        if (parentRef.current)
          if (
            parentRef.current.getBoundingClientRect().top +
              parentRef.current.offsetHeight -
              ref.current.getBoundingClientRect().top -
              ref.current.offsetHeight <
            50
          ) {
            parentRef.current.scrollTop += 20;
          }
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        // if (parentRef.current)
        //   if (
        //     parentRef.current.getBoundingClientRect().top +
        //       ref.current.getBoundingClientRect().top <
        //     50
        //   ) {
        //     parentRef.current.scrollTop -= 20;
        //   }
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isMobile ? (isDragging ? 1 : 1) : isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={`color-list-item ${
        isDragging ? 'border-2 border-gray-900' : 'text-md font-normal '
      }`}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      {hex}
    </div>
  );
};
