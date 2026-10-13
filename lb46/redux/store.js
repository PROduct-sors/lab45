import { configureStore, createSlice } from '@reduxjs/toolkit';

// Початковий стан з localStorage
const preloadedState = JSON.parse(localStorage.getItem('todos')) || [];

// Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: preloadedState,
    filter: 'ALL'
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload, isComplete: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload);
      if (todo) todo.isComplete = !todo.isComplete;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, toggleTodo, setFilter } = todosSlice.actions;

// Middleware для збереження в localStorage
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type?.startsWith('todos/')) {
    const todos = store.getState().todos.list;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  return result;
};

// Store
export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});