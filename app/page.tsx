'use client';

import EditTodo from '@/components/EditTodo';
import TodoList from '@/components/TodoList';
import { TODOS } from '@/lib/data';
import { TodoType } from '@/lib/types';
import { useState } from 'react';

export default function Home() {
  const [allTodos, setAllTodos] = useState<TodoType[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const selectTodo = (todo: TodoType) => {
    setSelectedTodo(todo);
  };

  const unselectTodo = () => {
    setSelectedTodo(null);
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8">
      {selectedTodo && (
        <EditTodo todo={selectedTodo} unselectTodo={unselectTodo} />
      )}
      <TodoList todos={TODOS} selectTodo={selectTodo} />
    </div>
  );
}
