import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Navbar from '.';

beforeEach(() => {
  render(<Navbar />);
});

afterEach(() => {});

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

  test('render correctly', () => {
    const menu = screen.getByRole('menu', { hidden: true });
    expect(menu).toMatchSnapshot();
  });

  test('menu when visible', () => {
    const button = screen.getByTestId('toggle-button');
    fireEvent.click(button);

    const menu = screen.getByRole('menu');
    expect(menu).toBeVisible();
    expect(menu).toMatchSnapshot();
  });
});
