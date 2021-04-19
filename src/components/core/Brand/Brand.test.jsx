import React from 'react';
import { render, screen } from '@testing-library/react';

import Brand from '.';

beforeEach(() => {});

afterEach(() => {});

describe('Brand', () => {
  test('sidebar not expanded', () => {
    render(<Brand />);

    const aside = screen.getByRole('list');
    expect(aside).toMatchSnapshot();
  });

  test('sidebar expanded', () => {
    render(<Brand expanded />);

    const aside = screen.getByRole('list');
    expect(aside).toMatchSnapshot();
  });
});
