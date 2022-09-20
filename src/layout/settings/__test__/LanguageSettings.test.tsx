import React from 'react';
import LanguageSettings from '../LanguageSettings';
import { render, screen } from '@testing-library/react';

describe('LanguageSettings', () => {
  test('renders a language settings', () => {
    render(<LanguageSettings />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
