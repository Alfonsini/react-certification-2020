import React from 'react';
import { render, screen } from '../../../test/testUtils';

import Brand from '.';

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

