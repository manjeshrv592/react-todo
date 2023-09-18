import React, { useState } from 'react';
import NewTodoForm from './components/forms/NewTodoForm';
import Todos from './components/todos/Todos';

const App = () => {
  // Todos array
  const [todos, setTodos] = useState([]);

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
