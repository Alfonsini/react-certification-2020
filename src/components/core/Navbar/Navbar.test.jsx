import React from 'react';
import { render, screen, fireEvent } from '../../../test/testUtils';

import Navbar from '.';

beforeEach(() => {
  render(<Navbar />);
});

describe('Navbar', () => {
  test('render correctly', () => {
    const navbar = screen.getByTestId('nav');
    expect(navbar).toMatchSnapshot();
  });

  test('toggle button when visible', () => {
    const button = screen.getByTestId('toggle-button');
    expect(button).toMatchSnapshot();
    expect(button).toHaveClass('fa-bars');
  });

  test('user menu button when visible', () => {
    const button = screen.getByTestId('user-button');
    expect(button).toMatchSnapshot();
    expect(button).toHaveClass('fa-user');
  });

  test('menu is in place', () => {
    const menu = screen.getByTestId('nav-menu-horizontal', { hidden: true });
    expect(menu).toMatchSnapshot();
  });

  test('menu when visible', () => {
    const button = screen.getByTestId('toggle-button');
    fireEvent.click(button);

    const menu = screen.getByTestId('nav-menu-horizontal');
    expect(menu).toBeVisible();
    expect(menu).toMatchSnapshot();
  });
});
