import { type ChangeEvent } from 'react';
import clsx from 'clsx';

import type { TodoType } from '@/lib/types';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

type TodoSingleProps = {
  todo: TodoType;
  selectTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: TodoType) => void;
};

export default function TodoSingle({
  todo,
  selectTodo,
  deleteTodo,
  editTodo,
}: TodoSingleProps) {
  const { id, title, description, isComplete } = todo;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    const updatedTodo = {
      ...todo,
      isComplete: e.target.checked,
    };
    editTodo(updatedTodo);
  };

  return (
    <Card className="w-full flex-row hover:bg-blue-300 hover:cursor-pointer hover:scale-110">
      <CardHeader
        className={clsx('w-[75%]', { 'line-through': isComplete })}
        onClick={() => selectTodo(todo)}
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="w-[25%]">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Input
              type="checkbox"
              id="complete"
              checked={isComplete}
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="complete">Complete?</Label>
          </div>
          <div>
            <Button type="button" onClick={() => deleteTodo(id)}>
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
