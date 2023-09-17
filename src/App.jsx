import React, { useState } from 'react';
import NewTodoForm from './components/forms/NewTodoForm';
import Todos from './components/todos/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  const handleDelete = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <article className='card mx-auto shadow'>
      <NewTodoForm onAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        onDelete={handleDelete}
        onToggleTodo={handleToggleTodo}
      />
    </article>
  );
};

export default App;
