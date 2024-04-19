import { render } from '@testing-library/react';
import type { Todo } from '@/types';

import TodoPresentation from './TodoPresentation';

describe('Todo一覧ページのテスト', () => {
  test('Todo一覧ページが表示されること', () => {
    const { getByText } = render(<TodoPresentation todos={[]} />);
    expect(getByText('Todo List')).toBeInTheDocument();
  });
  test('Todoが1件以上ある場合はTodo一覧が表示されること', () => {
    const mockTodos: Todo[] = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ];
    const { getByText } = render(<TodoPresentation todos={mockTodos} />);
    expect(getByText('delectus aut autem')).toBeInTheDocument();
  });
  test('Todoが1件もない場合はメッセージが表示されること', () => {
    const { getByText } = render(<TodoPresentation todos={[]} />);
    expect(getByText('Todoはありません')).toBeInTheDocument();
  });
});
