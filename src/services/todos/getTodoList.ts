import { Todo } from '@/types';

export default async function getTodoList(): Promise<Todo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
}
