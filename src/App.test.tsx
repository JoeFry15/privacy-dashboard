import React from 'react';
import { act, render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { DeletionEmail } from './components/Deletion/DeletionEmail';
import { EmailLeakChecker } from './components/Leaks/EmailLeakChecker';
import { fetchSampleLeaksByEmail } from './clients/apiClient';

afterEach(() => {
    cleanup();  
});

test('renders Privacy Dashboard heading', () => {
    render(<App />);
    const textElement = screen.getByTestId("home-1")
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Privacy Dashboard");
    expect(textElement).toContainHTML('</h1>')
  });

test('renders deletion email header for Instabook', () => {
    const { getByText } = render(<DeletionEmail account="Instabook" />);
    const textElement = getByText(/Deletion Email for Instabook/i);
    expect(textElement).toBeInTheDocument();
  });

test('renders deletion email text for Facegram', () => {
  const { getByText } = render(<DeletionEmail account="Facegram" />);
  const textElement = getByText(/In accordance with Article 17 of the European General Data Protection Regulation, please proceed to the erasure of my personal data without undue delay./i);
  expect(textElement).toBeInTheDocument();
});

test('the sample data fetch correctly returns Adobe', async () => {
  const data = await fetchSampleLeaksByEmail();
  expect(data[0].Name).toMatch(/Adobe/i);
});