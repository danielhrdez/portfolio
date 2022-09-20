import React from 'react';
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  test('renders a footer', () => {
    render(<Footer />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
