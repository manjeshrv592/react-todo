import { v4 as uuidv4 } from 'uuid';

const tempTodos = [
  {
    id: uuidv4(),
    description: 'Finish morning workout',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Have a healthy breakfast',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Read CSS newsletter',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Finish client meeting',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Solve UI bug',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Have launch',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Implement new Filter feature to app',
    completed: true,
  },
  {
    id: uuidv4(),
    description: 'Go for a Walk',
    completed: false,
  },
  {
    id: uuidv4(),
    description: 'Buy grocceries',
    completed: false,
  },
  {
    id: uuidv4(),
    description: 'Have Dinner',
    completed: false,
  },
];

export default tempTodos;
