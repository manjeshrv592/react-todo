import React from 'react';
import TodosItem from './TodosItem';

const Todos = ({ todos, onDelete, onToggleTodo }) => {
  return (
    <ul className='todos'>
      {todos.map(todo => (
        <TodosItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default Todos;
