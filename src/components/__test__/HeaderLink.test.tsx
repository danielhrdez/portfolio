import React from 'react';
import HeaderLink from '../HeaderLink';
import { render, screen } from '@testing-library/react';

describe('HeaderLink', () => {
  test('renders a link', () => {
    render(
      <HeaderLink
        href="https://www.google.com"
        text="Google"
        active={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByText('Google')).toBeInTheDocument();
  });
});
