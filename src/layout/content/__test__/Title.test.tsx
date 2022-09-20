import React from 'react';
import Title from '../Title';
import { render, screen } from '@testing-library/react';

describe('Title', () => {
  test('renders a title', () => {
    render(<Title />);
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });
});
