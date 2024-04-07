import { Todo } from '@/types';
import { apiEndpoint } from '@/constants/apiEndpoint';

interface CreateTodoParams {
  userId: number;
  title: string;
}

export default async function createTodo(
  params: CreateTodoParams,
): Promise<Todo> {
  const response = await fetch(`${apiEndpoint}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ ...params }),
  });
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
}
