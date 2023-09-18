import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  return (
    <ul className='todos'>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
