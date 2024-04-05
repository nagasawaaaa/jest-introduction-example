import type { Todo } from '@/types';
import getTodoList from "@/services/todos/getTodoList";
import Link from "next/link";

interface Props {
  todos: Todo[];
}

export function TodoPresentation({ todos }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">Todo List</h1>
      {todos.length > 0 ? (
        <ul className="space-y-2 list-disc list-inside">
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>Todoはありません</p>
      )}
      <div>
        <Link className="underline hover:no-underline" href="/">Go to Home</Link>
      </div>
    </div>
  );
}

export default async function Todo() {
  const todos = await getTodoList();
  // MEMO: すべて出力すると長いので先頭10件だけ表示
  const latestTodos = todos.slice(0, 10);
  return <TodoPresentation todos={latestTodos} />;
}
