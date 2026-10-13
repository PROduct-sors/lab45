import { atom } from 'recoil';

// Ефект для синхронізації з localStorage
const localStorageEffect = key => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const todoListState = atom({
  key: 'todoListState',
  default: [],
  effects: [
    localStorageEffect('todo_list_recoil'),
  ],
});

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'All', // 'All', 'Active', 'Completed'
});