'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import type { TodoType } from '@/lib/types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import EditInput from './EditInput';

type EditTodoProps = {
  todo: TodoType;
  unselectTodo: () => void;
};

export default function EditTodo({ todo, unselectTodo }: EditTodoProps) {
  const { id, title, description, isComplete } = todo;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description || '');
  const [newComplete, setNewComplete] = useState(isComplete);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComplete(e.target.checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTodo = {
      ...todo,
      title: newTitle,
      description: newDescription,
      isComplete: newComplete,
    };
    console.log('updated:', updatedTodo);
    unselectTodo();
  };

  return (
    <div className="overlay absolute h-full w-full top-0 left-0">
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative m-auto h-[80vh] w-[80vw] flex items-center justify-center">
          <Button
            className="absolute right-4 top-4 hover:cursor-pointer"
            type="button"
            onClick={unselectTodo}
          >
            x
          </Button>
          <form
            className="bg-white h-[80vh] w-[80vw] flex flex-col items-center justify-evenly rounded-2xl"
            onSubmit={handleSubmit}
          >
            <EditInput
              id="title"
              label="Title"
              value={newTitle}
              setValue={setNewTitle}
            />
            <EditInput
              id="description"
              label="Description"
              value={newDescription}
              setValue={setNewDescription}
            />
            <div className="flex items-center gap-3">
              <Input
                type="checkbox"
                id="complete"
                checked={newComplete}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor="complete">Complete?</Label>
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
