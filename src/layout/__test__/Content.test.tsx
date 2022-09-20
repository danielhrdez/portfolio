import React from 'react';
import Content from '../Content';
import { render, screen } from '@testing-library/react';

describe('Content', () => {
  test('renders a div', () => {
    render(<Content />);
    expect(screen.getByText('Daniel Hernández de León')).toBeInTheDocument();
  });
});
