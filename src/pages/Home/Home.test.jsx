import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../../test/testUtils';

// import Navbar from '../../components/core/Navbar';
// import AppContent from '../../components/core/AppContent';
import Home from '.';

describe('Home', () => {
  test('home render correctly', () => {
    render(<Home />);
    const row = screen.getByTestId('row');
    expect(row).toBeInTheDocument();
    expect(row).toMatchSnapshot();
  });
});
