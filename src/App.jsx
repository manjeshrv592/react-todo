import React, { useState } from 'react';
import NewTodoForm from './components/forms/NewTodoForm';
import Filter from './components/filter/Filter';
import Todos from './components/todos/Todos';
import tempTodos from './data/data';

const App = () => {
  // Todos array
  const [todos, setTodos] = useState(tempTodos);

  // Derived states
  const stats = {
    all: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length,
  };

  // Create new Todo
  const handleAddTodo = newTodo => {
    setTodos(todos => [...todos, newTodo]);
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

  return (
    <div className='card mx-auto shadow'>
      <NewTodoForm onAddTodo={handleAddTodo} />
      <Filter stats={stats} />
      <Todos
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
