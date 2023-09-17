import React, { useState } from 'react';
import NewTodoForm from './components/forms/NewTodoForm';
import Todos from './components/todos/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  const handleEditTodo = (id, description) => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, description } : todo))
    );
  };

  const handleDeleteTodo = id => {
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
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        onEditTodo={handleEditTodo}
      />
    </article>
  );
};

export default App;
