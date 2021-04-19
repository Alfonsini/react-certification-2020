import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '.';

beforeEach(() => {
  render(<Search />);
});

afterEach(() => {});

describe('Search field', () => {
  test('render correctly', () => {
    const navbar = screen.getByTestId('search-container');
    expect(navbar).toMatchSnapshot();
  });

  test('input in place', () => {
    const navbar = screen.getByTestId('search-input');
    expect(navbar).toBeInTheDocument();
  });

  test('search icon in place', () => {
    const button = screen.getByTestId('search-icon');
    expect(button).toMatchSnapshot();
    expect(button).toHaveClass('fa-search');
  });
});
