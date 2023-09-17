import { useState } from 'react';
import EditTodoForm from '../forms/EditTodoForm';

const TodosItem = ({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = () => {
    setToggleEdit(toggleEdit => !toggleEdit);
  };

  return (
    <li className={`todos-item ${todo.completed ? 'completed' : ''}`}>
      {!toggleEdit ? (
        <>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />

          <p>{todo.description}</p>

          <div className='todos-actions'>
            <button onClick={handleToggleEdit}>
              <i className='fa-solid fa-pen-to-square'></i>
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>
              <i className='fa-solid fa-trash-can'></i>
            </button>
          </div>
        </>
      ) : (
        <EditTodoForm
          todo={todo}
          onToggleEdit={handleToggleEdit}
          onEditTodo={onEditTodo}
        />
      )}
    </li>
  );
};

export default TodosItem;
