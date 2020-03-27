import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Culture link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Culture/i);
  expect(linkElement).toBeInTheDocument();
});
