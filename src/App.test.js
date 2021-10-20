import { render, screen } from '@testing-library/react';
import App from './App';

test('Found yo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yo/i);
  expect(linkElement).toBeInTheDocument();
});

test('Found again', () => {
  render(<App />);
  const linkElement = screen.getByText(/Again/i);
  expect(linkElement).toBeInTheDocument();
});
