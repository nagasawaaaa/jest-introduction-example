import { render, cleanup } from '@testing-library/react';

import Button from './Button';

describe('Button Render', () => {
  beforeEach(cleanup);
  test('Button にテキストを渡せる', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const buttonElement = getByRole('button', { name: 'Click me' });
    expect(buttonElement).toBeInTheDocument();
  });
  test('Button にクリックイベントを渡して発火できる', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = getByRole('button', { name: 'Click me' });
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
