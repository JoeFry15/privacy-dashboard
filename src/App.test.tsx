import React from 'react';
import { act, render } from '@testing-library/react';
import App from './App';
import { DeletionEmail } from './components/Deletion/DeletionEmail';
import { EmailLeakChecker } from './components/Leaks/EmailLeakChecker';
import { fetchSampleLeaksByEmail } from './clients/apiClient';

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

  test('the data is Adobe', async () => {
    const data = await fetchSampleLeaksByEmail();
    expect(data[0].Name).toMatch(/Adobe/i);
  });