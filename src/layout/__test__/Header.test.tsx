import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('renders a header', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
