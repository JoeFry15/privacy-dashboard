import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { DeletionEmail } from './components/Deletion/DeletionEmail';

test('renders Privacy Dashboard heading', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Privacy Dashboard/i);
  expect(textElement).toBeInTheDocument();
});

test('renders deletion email for Instabook', () => {
    const { getByText } = render(<DeletionEmail account="Instabook" />);
    const textElement = getByText(/Deletion Email for Instabook/i);
    expect(textElement).toBeInTheDocument();
  });