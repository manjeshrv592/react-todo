import React, { useState } from 'react';
import EditTodoForm from '../forms/EditTodoForm';

const TodosItem = ({ todo, onToggleTodo, onDelete }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => {
    setShowEditForm(prevState => !prevState);
  };

  return (
    <li className={`todos-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />

      {showEditForm ? <EditTodoForm /> : <p>{todo.description}</p>}

      <div className='todos-actions'>
        <button onClick={handleShowEditForm}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
};

export default TodosItem;
