import { FC, useState, useRef, useCallback } from 'react';
import { DndColorCard } from './DndColorCard';
import update from 'immutability-helper';
import { Color } from '../types';

export interface DndColorContainer {
  cards: Color[];
}

export const ColorsListContainer: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  {
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
        hex: 'PROFIT',
      },
      {
        id: 8,
        hex: 'PROFIT',
      },
      {
        id: 9,
        hex: 'PROFIT',
      },
      {
        id: 10,
        hex: 'PROFIT',
      },
      {
        id: 11,
        hex: 'PROFIT',
      },
      {
        id: 12,
        hex: 'PROFIT',
      },
      {
        id: 13,
        hex: 'PROFIT',
      },
      {
        id: 14,
        hex: 'PROFIT',
      },
      {
        id: 15,
        hex: 'PROFIT',
      },
      {
        id: 16,
        hex: 'PROFIT',
      },
    ]);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    const renderCard = (card: { id: number; hex: string }, index: number) => {
      return (
        <DndColorCard
          parentRef={ref as React.RefObject<HTMLDivElement>}
          key={card.id}
          index={index}
          id={card.id}
          hex={card.hex}
          moveCard={moveCard}
        />
      );
    };

    return (
      <>
        <div ref={ref} className='color-list-container'>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    );
  }
};
