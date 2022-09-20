import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import { render, screen } from '@testing-library/react';

describe('ToggleSwitch', () => {
  test('renders a switch', () => {
    render(<ToggleSwitch
      checked={false}
      onChange={() => {}}
      text1="Off"
      text2="On"
    />);
    expect(screen.getByText('Off')).toBeInTheDocument();
  });
});
