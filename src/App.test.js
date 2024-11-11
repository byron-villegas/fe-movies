import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve({status:200}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
