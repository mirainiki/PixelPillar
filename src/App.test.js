// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PixelPillar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PixelPillar/i);
    expect(titleElement).toBeInTheDocument();
});
