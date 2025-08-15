'use client';

import { type FormEvent, useState } from 'react';

import type { NewTodoType } from '@/lib/types';
import { Button } from './ui/button';
import FormInput from './FormInput';

type AddTodoProps = {
  addTodo: (newTodo: NewTodoType) => void;
  stopCreating: () => void;
};

export default function AddTodo({ addTodo, stopCreating }: AddTodoProps) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      title: newTitle,
      description: newDescription,
    };
    addTodo(newTodo);
    stopCreating();
  };

  return (
    <div>
      <form
        className="bg-white h-[80vh] w-[80vw] flex flex-col items-center justify-evenly rounded-2xl"
        onSubmit={handleSubmit}
      >
        <FormInput
          id="title"
          label="Title"
          value={newTitle}
          setValue={setNewTitle}
        />
        <FormInput
          id="description"
          label="Description"
          value={newDescription}
          setValue={setNewDescription}
        />

        <div className="flex items-center gap-3">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
