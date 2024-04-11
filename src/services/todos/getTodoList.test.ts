import getTodoList from './getTodoList';

jest.mock('./getTodoList');

describe('getTodoList', () => {
  test('todo一覧を取得できる', async () => {
    (getTodoList as jest.Mock).mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ]);
    const result = await getTodoList();
    expect(result).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ]);
  });
  test('通信が失敗した場合はエラーを投げる', async () => {
    expect.assertions(1);
    (getTodoList as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    try {
      await getTodoList();
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch'));
    }
  });
});
