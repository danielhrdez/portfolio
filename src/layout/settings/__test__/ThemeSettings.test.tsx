import React from 'react';
import ThemeSettings from '../ThemeSettings';
import { render, screen } from '@testing-library/react';

describe('ThemeSettings', () => {
  test('renders a theme settings', () => {
    render(<ThemeSettings />);
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});
