import React from 'react';
import { render, screen, fireEvent } from '../../../test/testUtils';

import Sidebar from '.';

beforeEach(() => {
  render(<Sidebar />);
});

describe('Sidebar', () => {
  test('sidebar render correctly', async () => {
    const aside = screen.getByRole('menubar');
    expect(aside).toMatchSnapshot();
  });

  test('sidebar render correctly not expanded', async () => {
    const aside = screen.getByRole('menubar');
    fireEvent.mouseOver(aside);
    fireEvent.mouseOut(aside);

    const style = window.getComputedStyle(aside);
    expect(style).toMatchSnapshot();
  });

  test('sidebar render correctly expanded', async () => {
    const aside = screen.getByRole('menubar');
    fireEvent.mouseOver(aside);

    const style = window.getComputedStyle(aside);
    expect(style).toMatchSnapshot();
  });
});
