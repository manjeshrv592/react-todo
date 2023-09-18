import { useState } from 'react';
import EditTodoForm from '../forms/EditTodoForm';
import Item from './Item';

const Todo = ({ todo, onEditTodo, onDeleteTodo, onToggleTodo }) => {
  // State to toggle Edit form
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = () => {
    setToggleEdit(toggleEdit => !toggleEdit);
  };

  return (
    <li className={`todos-item ${todo.completed ? 'completed' : ''}`}>
      {/* Show Edit form or Todo depending on 'toggleEdit' value */}
      {!toggleEdit ? (
        <Item
          todo={todo}
          onToggleTodo={onToggleTodo}
          onToggleEdit={handleToggleEdit}
          onDeleteTodo={onDeleteTodo}
        />
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

export default Todo;
