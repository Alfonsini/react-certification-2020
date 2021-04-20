import React from 'react';
import { render, screen } from '../../test/testUtils';

import VideoDetail from '.';

describe('Video detail', () => {
  test('Video detail render correctly', () => {
    render(<VideoDetail />);
    const row = screen.getByTestId('row');
    expect(row).toBeInTheDocument();
  });
});
