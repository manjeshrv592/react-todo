import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ onAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // If no value in input return
    if (!description) return;

    // Generate unique ID
    const newId = uuidv4();

    const newTodo = { id: newId, description, completed: false };

    onAddTodo(newTodo);

    // Clear input field
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='new-todo-form'>
      <input
        type='text'
        placeholder='Add new todo'
        className='input'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className='btn btn-primary'>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
