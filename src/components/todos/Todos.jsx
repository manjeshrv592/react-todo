import React from 'react';
import TodosItem from './TodosItem';

const Todos = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onToggleEdit,
  onEditTodo,
}) => {
  return (
    <ul className='todos'>
      {todos.map(todo => (
        <TodosItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          onToggleEdit={onToggleEdit}
        />
      ))}
    </ul>
  );
};

export default Todos;
