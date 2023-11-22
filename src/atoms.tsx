import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Store and sync state to Storage

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});
