import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[]; // 변수
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  // default: ['a', 'b', 'c', 'd', 'e'],
  default: {
    to_do: ['a', 'b'],
    doing: ['c'],
    done: ['d', 'e'],
  },
});
