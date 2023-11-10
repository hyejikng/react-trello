import { atom } from 'recoil';

//Form toDo
export interface ITodo {
  id: number;
  text: string;
}
interface IToDoState {
  [key: string]: ITodo[]; // 변수
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    Todo: [],
    Doing: [],
    Done: [],
  },
});
