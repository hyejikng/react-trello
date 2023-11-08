import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DraggableCard from './components/DraggableCard';
import Board from './components/Board';

const Boards = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  console.log(toDos);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // console.log('dragging finished');
    // console.log(args);
    if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos]; // default value of 'toDoState' = copyToDos
    //   //1) Delete item on source.index
    //   copyToDos.splice(source.index, 1);
    //   //2) Put back the item on the destination.index
    //   copyToDos.splice(destination.index, 0, draggableId);
    //   return copyToDos; // the type of return value is an array.
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {/*   <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable> */}
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;

//배열만들기. Draggable 복붙 방지를 위해.
