export type TodoType = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

export type NewTodoType = Omit<TodoType, 'id' | 'isComplete'>;
