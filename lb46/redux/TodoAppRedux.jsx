import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, addTodo, toggleTodo, setFilter } from './store';

const TodoAppRedux = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  
  const { list, filter } = useSelector(state => state.todos);
  const filteredTodos = list.filter(todo => {
    if (filter === 'COMPLETED') return todo.isComplete;
    if (filter === 'ACTIVE') return !todo.isComplete;
    return true;
  });

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div className="todo-container">
      <h2>Redux TODO</h2>
      
      <div className="input-group">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Нова задача..." 
        />
        <button onClick={handleAdd}>Додати</button>
      </div>
      
      <div className="filters">
        <button className={filter === 'ALL' ? 'active' : ''} onClick={() => dispatch(setFilter('ALL'))}>Всі</button>
        <button className={filter === 'ACTIVE' ? 'active' : ''} onClick={() => dispatch(setFilter('ACTIVE'))}>Активні</button>
        <button className={filter === 'COMPLETED' ? 'active' : ''} onClick={() => dispatch(setFilter('COMPLETED'))}>Виконані</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li 
            key={todo.id} 
            className={todo.isComplete ? 'completed' : ''}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function AppRedux() {
  return (
    <Provider store={store}>
      <TodoAppRedux />
    </Provider>
  );
}