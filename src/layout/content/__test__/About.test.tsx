import React from 'react';
import About from '../About';
import { render, screen } from '@testing-library/react';

describe('About', () => {
  test('renders an about', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
