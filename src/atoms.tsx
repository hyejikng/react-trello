import { atom, selector } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  // default: ['a', 'b', 'c', 'd', 'e'],
  default: {
    to_do: ['a', 'b'],
    doing: ['c'],
    done: ['d', 'e'],
  },
});
