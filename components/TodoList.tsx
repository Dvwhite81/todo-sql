import { TodoType } from '@/lib/types';
import TodoSingle from './TodoSingle';

type TodoListProps = {
  todos: TodoType[];
  selectTodo: (todo: TodoType) => void;
};

export default function TodoList({ todos, selectTodo }: TodoListProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {todos.map((todo) => (
        <TodoSingle key={todo.id} todo={todo} selectTodo={selectTodo} />
      ))}
    </div>
  );
}
