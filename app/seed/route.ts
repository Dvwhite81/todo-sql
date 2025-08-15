import postgres from 'postgres';
import { TODOS } from '@/lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const seedTodos = async () => {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      isComplete BOOLEAN DEFAULT TRUE
    );
  `;

  const insertedTodos = await Promise.all(
    TODOS.map(
      (todo) => sql`
        INSERT INTO todos (title, description, isComplete)
        VALUES (${todo.title}, ${todo.description}, ${todo.isComplete})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedTodos;
};

export async function GET() {
  try {
    await sql.begin(() => [seedTodos()]);

    return Response.json({ message: 'Database seeded successfully.' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
