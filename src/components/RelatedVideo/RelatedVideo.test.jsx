import React from 'react';
import { render, screen } from '../../test/testUtils';

import RelatedVideo from '.';

describe('Related video', () => {
  test('related video render correctly', () => {
    render(<RelatedVideo />);

    const section = screen.getByTestId('video-section');
    expect(section).toBeInTheDocument();
  });
});
