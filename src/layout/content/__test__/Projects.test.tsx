import React from 'react';
import Projects from '../Projects';
import { render, screen } from '@testing-library/react';

describe('Projects', () => {
  test('renders a projects', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});
