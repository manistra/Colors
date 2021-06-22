import { useState } from 'react';
import { DndColorCard } from './Color';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const ColorsListContainer = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      hex: 'Write a cool JS library',
    },
    {
      id: 2,
      hex: 'Make it generic enough',
    },
    {
      id: 3,
      hex: 'Write README',
    },
    {
      id: 4,
      hex: 'Create some examples',
    },
    {
      id: 5,
      hex: 'Spam in Twitter and IRC to hers)',
    },
    {
      id: 6,
      hex: '???',
    },
    {
      id: 7,
      hex: 'PROa2dsFIT',
    },
    {
      id: 8,
      hex: 'PRasdOFIT',
    },
    {
      id: 9,
      hex: 'PROFsadIT',
    },
    {
      id: 10,
      hex: 'PasdadROFIT',
    },
    {
      id: 11,
      hex: 'PRsadOFIasdT',
    },
    {
      id: 12,
      hex: 'ddss',
    },
    {
      id: 13,
      hex: 'PRdadddsOFIT',
    },
    {
      id: 14,
      hex: 'PRdsdddaOFIT',
    },
    {
      id: 15,
      hex: 'PROFIsssT',
    },
    {
      id: 16,
      hex: 'PROdddFIT',
    },
  ]);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newColorList = [...cards];
    newColorList.splice(source.index, 1);
    newColorList.splice(destination.index, 0, cards[source.index]);
    setCards(newColorList);
  };

  const renderCard = (card: { id: number; hex: string }, index: number) => {
    return (
      <DndColorCard key={card.hex} index={index} id={card.id} hex={card.hex} />
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
            {cards.map((card, i) => renderCard(card, i))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
