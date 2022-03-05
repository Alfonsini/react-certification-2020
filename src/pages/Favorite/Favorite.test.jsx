import React from 'react';
import { render, screen } from '../../test/testUtils';

import Favorite from '.';

describe('Favorite', () => {
  test('Favorite render correctly', () => {
    render(<Favorite />);
    const row = screen.getByTestId('favorite-page');
    expect(row).toBeInTheDocument();
    expect(row).toMatchSnapshot();
  });
});
