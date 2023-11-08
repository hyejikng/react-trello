import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 6px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <div>
      <Draggable key={toDo} draggableId={toDo} index={index}>
        {(magic) => (
          <Card
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {toDo}
          </Card>
        )}
      </Draggable>
    </div>
  );
}

export default DraggableCard;
