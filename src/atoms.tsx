import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[]; // 변수
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  // default: ['a', 'b', 'c', 'd', 'e'],
  default: {
    Todo: ['a', 'b'],
    Doing: ['c'],
    Done: ['d', 'e'],
  },
});
