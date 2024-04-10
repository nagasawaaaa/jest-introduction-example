import createTodo from './createTodo';

jest.mock('./createTodo');

const input = {
  userId: 1,
  title: 'title',
};

describe('createTodo', () => {
  test('正常にTodoが作成される', async () => {
    (createTodo as jest.Mock).mockImplementation(async () => ({
      title: 'title',
      id: 1,
      userId: 1,
      completed: false,
    }));
    const todo = await createTodo({
      ...input,
    });
    expect(todo).toEqual({
      title: 'title',
      id: 1,
      userId: 1,
      completed: false,
    });
  });
  test('通信が失敗した場合はエラーを投げる', async () => {
    expect.assertions(1);
    (createTodo as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    try {
      await createTodo({
        ...input,
      });
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch'));
    }
  });
});
