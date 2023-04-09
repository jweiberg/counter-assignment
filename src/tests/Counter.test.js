// Import necessary react testing library helpers
import Counter from '../components/Counter'
import {screen,render,fireEvent} from '@testing-library/react'

// Render the counter component
beforeEach(() => {
  render(<Counter />);
})

// Render the counter message
test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);

  expect (message).toBeInTheDocument();
});

// Render initial count with 0 value
test('should render initial count with value of 0', () => {
  const value = screen.getByText(/0/i);

  expect (value).toBeInTheDocument();
});

// Render incremented count
test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"));

  const value = screen.getByText(/1/i);

  expect (value).toBeInTheDocument();
});

// Render decremented count
test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"));

  const value = screen.getByText(/-1/i);

  expect (value).toBeInTheDocument();
});
