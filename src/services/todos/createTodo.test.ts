import createTodo from './createTodo';
import getTodoList from "@/services/todos/getTodoList";

const input = {
  userId: 1,
  title: 'title',
};

describe('createTodo', () => {
  test('正常にTodoが作成されたら、作成したTodoを返す', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        userId: 1,
        id: 1,
        title: 'title',
        completed: false,
      }),
    } as Response);
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
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    } as Response);
    await expect(getTodoList()).rejects.toThrow('Failed to fetch');
  });
});
