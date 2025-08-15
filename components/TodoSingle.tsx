import clsx from 'clsx';

import type { TodoType } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type TodoSingleProps = {
  todo: TodoType;
  selectTodo: (todo: TodoType) => void;
};

export default function TodoSingle({ todo, selectTodo }: TodoSingleProps) {
  const { title, description, isComplete } = todo;

  return (
    <Card
      className="w-full flex-row hover:bg-blue-300 hover:cursor-pointer hover:scale-110"
      onClick={() => selectTodo(todo)}
    >
      <CardHeader className={clsx('w-[75%]', { 'line-through': isComplete })}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="w-[25%]">
        <form className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Checkbox id="complete" checked={isComplete} />
            <Label htmlFor="complete">Complete?</Label>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
