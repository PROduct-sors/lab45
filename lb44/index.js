// ==========================================
// Завдання 1. Список покупок (було в методичці)
// ==========================================
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });
const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: id });
const updateQuantity = (id, quantity) => ({ type: UPDATE_QUANTITY, payload: { id, quantity } });

console.log('--- Завдання 1 ---');
console.log(addProduct({ id: 1, name: 'Молоко', quantity: 2 }));
console.log(removeProduct(1));
console.log(updateQuantity(1, 5));


// ==========================================
// Завдання 2. Управління користувачами (було в методичці)
// ==========================================
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

const addUser = (user) => ({ type: ADD_USER, payload: user });
const removeUser = (id) => ({ type: REMOVE_USER, payload: id });
const updateUser = (id, updatedFields) => ({ type: UPDATE_USER, payload: { id, updatedFields } });

console.log('\n--- Завдання 2 ---');
console.log(addUser({ id: 1, name: 'Олена', email: 'olena@example.com' }));
console.log(removeUser(1));
console.log(updateUser(1, { email: 'olena.new@example.com' }));


// ==========================================
// Завдання 3. Todo-список (ТВОЯ ЧАСТИНА РОБОТИ)
// ==========================================

// 1. Константи типів дій
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';

// 2. Генератори дій (Action Creators)
const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText }
});

// 3. Перевірка в консолі
console.log('\n--- Завдання 3 ---');

console.log(addTodo({ id: 1, text: 'Зробити лабу з Redux', completed: false }));
// Очікуваний результат: { type: 'ADD_TODO', payload: { id: 1, text: 'Зробити лабу з Redux', completed: false } }

console.log(removeTodo(1));
// Очікуваний результат: { type: 'REMOVE_TODO', payload: 1 }

console.log(toggleTodo(1));
// Очікуваний результат: { type: 'TOGGLE_TODO', payload: 1 }

console.log(editTodo(1, 'Зробити лабу і відправити на гітхаб'));
// Очікуваний результат: { type: 'EDIT_TODO', payload: { id: 1, newText: 'Зробити лабу і відправити на гітхаб' } }