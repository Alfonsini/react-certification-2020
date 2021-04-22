import React from 'react';
import { render, screen } from '../../test/testUtils';

import HomePage from '.';

describe('Home', () => {
  test('home render correctly', () => {
    render(<HomePage />);
    const row = screen.getByTestId('home-page');
    expect(row).toBeInTheDocument();
    expect(row).toMatchSnapshot();
  });
});
