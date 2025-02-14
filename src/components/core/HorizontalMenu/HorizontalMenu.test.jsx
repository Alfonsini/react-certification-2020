import React from 'react';
import { render, screen } from '../../../test/testUtils';

import HorizontalMenu from '.';

beforeEach(() => {
  render(<HorizontalMenu />);
});

describe('HorizontalMenu', () => {
  test('render correctly', () => {
    const menu = screen.getByRole('menu', { hidden: true });
    expect(menu).toMatchSnapshot();
  });

  test('home is available', () => {
    const option = screen.getByText('Home');
    expect(option).toMatchSnapshot();
  });

  test('favorites is available', () => {
    const option = screen.getByText('Favorites');
    expect(option).toMatchSnapshot();
  });
});

