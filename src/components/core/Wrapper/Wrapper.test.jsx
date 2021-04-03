import React from 'react';
import { render, screen } from '@testing-library/react';

import Wrapper from '.';

beforeEach(() => {});

afterEach(() => {});

describe('Wrapper', () => {
  test('wrapper render correctly', () => {
    render(<Wrapper />);
    const aside = screen.getByRole('main');
    expect(aside).toMatchSnapshot();
  });
});
