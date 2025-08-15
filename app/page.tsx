'use client';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import type { NewTodoType, TodoType } from '@/lib/types';
import { TODOS } from '@/lib/data';
import AddTodo from '@/components/AddTodo';
import EditTodo from '@/components/EditTodo';
import TodoList from '@/components/TodoList';

export default function Home() {
  const [allTodos, setAllTodos] = useState<TodoType[]>(TODOS);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const selectTodo = (todo: TodoType) => {
    setSelectedTodo(todo);
  };

  const unselectTodo = () => {
    setSelectedTodo(null);
  };

  const editTodo = (updatedTodo: TodoType) => {
    const newTodos = allTodos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setAllTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(newTodos);
  };

  const addTodo = (newTodo: NewTodoType) => {
    const todoToAdd: TodoType = {
      id: uuid(),
      isComplete: false,
      ...newTodo,
    };
    const newTodos = [...allTodos, todoToAdd];
    setAllTodos(newTodos);
  };

  const stopCreating = () => {
    setIsCreating(false);
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8">
      {selectedTodo && (
        <EditTodo
          todo={selectedTodo}
          editTodo={editTodo}
          unselectTodo={unselectTodo}
        />
      )}
      {isCreating && <AddTodo addTodo={addTodo} stopCreating={stopCreating} />}
      {!selectedTodo && !isCreating && (
        <TodoList
          todos={allTodos}
          selectTodo={selectTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )}
    </div>
  );
}
