import React from 'react';

const Item = ({ todo, onToggleTodo, onToggleEdit, onDeleteTodo }) => {
  return (
    <>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />

      <p>{todo.description}</p>

      <div className='todos-actions'>
        <button onClick={onToggleEdit}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button onClick={() => onDeleteTodo(todo.id)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </>
  );
};

export default Item;
