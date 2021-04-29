import React from 'react';
import { render, screen } from '../../../test/testUtils';

import VerticalMenu from '.';

describe('VerticalMenu', () => {
  test('sidebar not expanded', () => {
    render(<VerticalMenu />);

    const aside = screen.getByRole('list');
    expect(aside).toMatchSnapshot();
  });

  test('sidebar expanded', () => {
    render(<VerticalMenu expanded />);

    const aside = screen.getByRole('list');
    expect(aside).toMatchSnapshot();
  });

  test('home is available', () => {
    render(<VerticalMenu />);
    const option = screen.getByText('Home');
    expect(option).toBeInTheDocument();
  });
});
