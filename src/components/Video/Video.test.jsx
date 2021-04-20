import React from 'react';
import { render, screen } from '../../test/testUtils';

import Video from '.';

describe('video', () => {
  test('video render correctly', () => {
    render(<Video />);
    const section = screen.getByTestId('video-section');
    expect(section).toBeInTheDocument();
  });
});
