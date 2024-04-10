import getTodoList from '@/services/todos/getTodoList';

import TodoPresentation from '@/app/todos/_components/TodoPresentation';

export default async function Todo() {
  const todos = await getTodoList();
  // MEMO: すべて出力すると長いので先頭10件だけ表示
  const latestTodos = todos.slice(0, 10);
  return <TodoPresentation todos={latestTodos} />;
}
