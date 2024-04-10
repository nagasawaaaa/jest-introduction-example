import { render } from '@testing-library/react';
import HomePresentation from './HomePresentation';

describe('Home Render', () => {
  test('<HomePresentation /> の message にテキストを渡せる', () => {
    const { getByRole } = render(<HomePresentation message="Hello Jest!!" />);
    expect(getByRole('heading', { name: 'Hello Jest!!' })).toBeInTheDocument();
  });
});
