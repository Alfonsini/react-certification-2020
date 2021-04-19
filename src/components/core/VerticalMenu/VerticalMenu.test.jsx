import React from 'react';
import { render, screen } from '@testing-library/react';

import VerticalMenu from '.';

beforeEach(() => {});

afterEach(() => {});

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
});
