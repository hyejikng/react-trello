import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const Card = styled.div<{ $isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 6px;
  background-color: ${(props) =>
    props.$isDragging ? 'tomato' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.$isDragging ? '0px 2px 5px rgba(0,0,0,0.1)' : 'none'};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  // console.log(toDo, 'has been rendered');

  return (
    <div>
      <Draggable draggableId={toDoId + ''} index={index}>
        {(magic, snapshot) => (
          <Card
            $isDragging={snapshot.isDragging}
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {toDoText}
          </Card>
        )}
      </Draggable>
    </div>
  );
}

// export default DraggableCard;
export default React.memo(DraggableCard);
