import { useState } from 'react';

const EditTodoForm = ({ todo, onEditTodo, onToggleEdit }) => {
  // State for updated description value
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = e => {
    e.preventDefault();
    onEditTodo(todo.id, description);

    // Close form after update
    onToggleEdit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='edit-todo-form'>
        <input
          type='text'
          className='input input-sm'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div>
          <button type='submit' className='btn btn-primary btn-sm'>
            Update Todo
          </button>
          <button type='button' className='btn  btn-sm' onClick={onToggleEdit}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditTodoForm;
