import { render } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Render', () => {
  test('ホーム画面に Hello Jest!! というテキストが存在する', () => {
    const { getByRole } = render(<Home />);
    getByRole('heading', { name: 'Hello Jest!!' });
  });
});
