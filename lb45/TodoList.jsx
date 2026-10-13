import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoFilterState } from './atoms';
import { incompleteCount, filteredTodoListState } from './selectors';

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const filteredTodos = useRecoilValue(filteredTodoListState);
  const left = useRecoilValue(incompleteCount);

  // Перемикання статусу
  const toggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Видалення однієї задачі
  const remove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Очищення всіх виконаних задач
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <strong>Невиконаних: {left}</strong>
        <button onClick={clearCompleted} style={{ cursor: 'pointer', color: 'red' }}>
          Очистити виконані
        </button>
      </div>

      {/* Фільтри */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        {['All', 'Active', 'Completed'].map((f) => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            style={{ fontWeight: filter === f ? 'bold' : 'normal', cursor: 'pointer' }}
          >
            {f === 'All' ? 'Всі' : f === 'Active' ? 'Активні' : 'Виконані'}
          </button>
        ))}
      </div>

      {/* Список задач */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            backgroundColor: todo.done ? '#f9f9f9' : 'white'
          }}>
            <label style={{ 
              cursor: 'pointer', 
              textDecoration: todo.done ? 'line-through' : 'none',
              color: todo.done ? 'gray' : 'black',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggle(todo.id)}
              />
              {todo.text}
            </label>
            <button onClick={() => remove(todo.id)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}