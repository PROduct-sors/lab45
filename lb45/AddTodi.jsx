import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atoms';

export default function AddTodo() {
  const setTodos = useSetRecoilState(todoListState);
  const [text, setText] = useState('');

  const add = () => {
    if (!text.trim()) return;
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: Date.now(), text, done: false },
    ]);
    setText('');
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
      <input
        style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Нова задача..."
        onKeyDown={(e) => e.key === 'Enter' && add()}
      />
      <button onClick={add} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Додати
      </button>
    </div>
  );
}