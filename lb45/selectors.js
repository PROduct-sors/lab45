import { selector } from 'recoil';
import { todoListState, todoFilterState } from './atoms';

// Лічильник невиконаних задач
export const incompleteCount = selector({
  key: 'incompleteCount',
  get: ({ get }) => get(todoListState).filter((item) => !item.done).length,
});

// Фільтрація задач для відображення
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Completed': return list.filter((item) => item.done);
      case 'Active': return list.filter((item) => !item.done);
      default: return list;
    }
  },
});
