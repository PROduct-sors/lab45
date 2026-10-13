import React, { useState } from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Атомы
const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'ALL',
});

// Селектор
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'COMPLETED': return list.filter((item) => item.isComplete);
      case 'ACTIVE': return list.filter((item) => !item.isComplete);
      default: return list;
    }
  },
});

const TodoAppRecoil = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const filteredTodos = useRecoilValue(filteredTodoListState);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodoList([...todoList, { id: Date.now(), text, isComplete: false }]);
    setText('');
  };

  const toggleComplete = (id) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  return (
    <div className="todo-container">
      <h2>Recoil TODO</h2>
      
      <div className="input-group">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Нова задача..." 
        />
        <button onClick={addTodo}>Додати</button>
      </div>
      
      <div className="filters">
        <button className={filter === 'ALL' ? 'active' : ''} onClick={() => setFilter('ALL')}>Всі</button>
        <button className={filter === 'ACTIVE' ? 'active' : ''} onClick={() => setFilter('ACTIVE')}>Активні</button>
        <button className={filter === 'COMPLETED' ? 'active' : ''} onClick={() => setFilter('COMPLETED')}>Виконані</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li 
            key={todo.id} 
            className={todo.isComplete ? 'completed' : ''}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function AppRecoil() {
  return (
    <RecoilRoot>
      <TodoAppRecoil />
    </RecoilRoot>
  );
}