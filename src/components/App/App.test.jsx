import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {

  render(<App />);

  expect(screen.getByRole('list')).toBeInTheDocument();
});
