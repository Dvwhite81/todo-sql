import { TodoType } from '@/lib/types';
import TodoSingle from './TodoSingle';

type TodoListProps = {
  todos: TodoType[];
  selectTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: TodoType) => void;
};

export default function TodoList({ todos, selectTodo, deleteTodo, editTodo }: TodoListProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {todos.map((todo) => (
        <TodoSingle key={todo.id} todo={todo} selectTodo={selectTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}
