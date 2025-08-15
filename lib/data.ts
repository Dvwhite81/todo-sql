import postgres from 'postgres';
import { TodoType } from './types';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchTodos() {
  try {
    const data = await sql<TodoType[]>`SELECT * FROM todos`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch todo data.');
  }
}

export async function fetchTodoById(id: string) {
  try {
    const data = await sql<TodoType[]>`
      SELECT
        todos.id,
        todos.title,
        todos.description,
        todos.isComplete
      FROM todos
      WHERE todos.id = ${id};
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch todo.');
  }
}
