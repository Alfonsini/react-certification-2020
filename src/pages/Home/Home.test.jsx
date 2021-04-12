import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '.';

beforeEach(() => {
  render(<Home />);
});

afterEach(() => {});

describe('Home', () => {
  test('home render correctly', async () => {
    const aside = screen.getByTestId('row');
    expect(aside).toMatchSnapshot();
  });
});
