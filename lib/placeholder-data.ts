import { TodoType } from './types';

export const TODOS: TodoType[] = [
  {
    id: '1',
    title: 'First Todo',
    description: 'This is the first todo',
    isComplete: false,
  },
  {
    id: '2',
    title: 'Second Todo',
    description: '',
    isComplete: false,
  },
  {
    id: '3',
    title: 'Third Todo',
    description: 'This todo is complete',
    isComplete: true,
  },
  {
    id: '4',
    title: 'Fourth Todo',
    description: 'This is the fourth todo',
    isComplete: false,
  },
];
