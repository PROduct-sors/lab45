import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div style={{ 
      maxWidth: 500, 
      margin: '40px auto', 
      fontFamily: 'sans-serif',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center' }}>Recoil TODO</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;