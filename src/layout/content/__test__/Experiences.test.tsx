import React from 'react';
import Experiences from '../Experiences';
import { render, screen } from '@testing-library/react';

describe('Experiences', () => {
  test('renders an experiences', () => {
    render(<Experiences />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });
});
