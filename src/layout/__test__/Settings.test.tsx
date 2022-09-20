import React from 'react';
import Settings from '../Settings';
import { render, screen } from '@testing-library/react';

describe('Settings', () => {
  test('renders a settings', () => {
    render(<Settings />);
    expect(screen.getByText('Language')).toBeInTheDocument();
  });
});
