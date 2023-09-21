import React, { useEffect, useState } from 'react';
import NewTodoForm from './components/forms/NewTodoForm';
import Filter from './components/filter/Filter';
import Todos from './components/todos/Todos';

const App = () => {
  // Todos array: We will check for local storage if todos is available we will use it else we will initialize state with empty array
  const [todos, setTodos] = useState(function () {
    const storedValue = localStorage.getItem('todos');
    if (!storedValue) return [];
    return JSON.parse(storedValue);
  });
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterBy, setFilterBy] = useState('all');

  // Derived states
  const stats = {
    all: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length,
  };

  const handleFilterBy = value => setFilterBy(value);

  // Create new Todo
  const handleAddTodo = newTodo => {
    setTodos(todos => [...todos, newTodo]);
    // When ever new Todo is created we will display all todos by setting filterBy state to 'all'
    setFilterBy('all');
  };

  // Update Todo
  const handleEditTodo = (id, description) => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, description } : todo))
    );
  };

  // Delete Todo
  const handleDeleteTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  // Toggle Todo as completed or not
  const handleToggleTodo = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(
    function () {
      setFilteredTodos([...todos]);
    },
    [todos]
  );

  useEffect(
    function () {
      switch (filterBy) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed));
          break;

        case 'pending':
          setFilteredTodos(todos.filter(todo => !todo.completed));
          break;

        default:
          setFilteredTodos([...todos]);
      }
    },
    [todos, filterBy]
  );

  // Store todos in localstorage
  useEffect(
    function () {
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <div className='card mx-auto shadow'>
      <NewTodoForm onAddTodo={handleAddTodo} />
      <Filter stats={stats} onFilterBy={handleFilterBy} filterBy={filterBy} />
      <Todos
        todos={filteredTodos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
