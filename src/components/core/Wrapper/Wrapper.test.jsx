import React from 'react';
import { render, screen } from '../../../test/testUtils';

import Wrapper from '.';

describe('Wrapper', () => {
  test('wrapper render correctly', () => {
    render(<Wrapper />);
    const aside = screen.getByRole('main');
    expect(aside).toBeInTheDocument();
  });
});
