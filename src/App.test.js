// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Echo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Echo/i);
    expect(titleElement).toBeInTheDocument();
});
