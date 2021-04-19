import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { server, rest } from '../../../test/server';
import * as search from '../../../test/search';
import { render, screen, fireEvent } from '../../../test/testUtils';

import Navbar from '../Navbar';
import AppContent from '../AppContent';
import HomePage from '../../../pages/Home';

import Search from '.';

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(window, 'fetch');
});

describe('Search field', () => {
  test('render correctly', () => {
    render(<Search />);

    const div = screen.getByTestId('search-div');
    expect(div).toMatchSnapshot();
  });

  test('input in place', () => {
    render(<Search />);

    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
  });

  test('search icon in place', () => {
    render(<Search />);

    const button = screen.getByTestId('search-icon');
    expect(button).toMatchSnapshot();
    expect(button).toHaveClass('fa-search');
  });

  test('testing input value', () => {
    render(<Search />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });

    expect(input.value).toBe('wizeline');
  });

  test('required type some text to search using search icon', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(window.fetch).toBeCalledTimes(0);
  });

  test('text provided but is loading a current search request using search icon', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.click(button);
    fireEvent.click(button);

    expect(window.fetch).toBeCalledTimes(1);
  });

  test('check how many calls has done', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await screen.findAllByTestId('video-item');

    expect(window.fetch).toBeCalledTimes(1);
  });

  test('check the correct concat of the URL', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await screen.findAllByTestId('video-item');

    const PART = 'snippet';
    const MAX_RESULTS = 25;
    const ORDER = 'rating';

    expect(window.fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&q=${input.value}&key=${process.env.REACT_APP_API_KEY}`
    );
  });

  test('searching successful using input', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const count = await (await screen.findAllByTestId('video-item')).length;
    expect(count).toBe(25);
  });

  test('searching successful using search icon', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.click(button);

    const count = await (await screen.findAllByTestId('video-item')).length;
    expect(count).toBe(25);
  });

  test('text provided but Up key was pressed', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' });

    expect(window.fetch).toBeCalledTimes(0);
  });

  test('text provided Enter key was pressed but is Loading', async () => {
    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(window.fetch).toBeCalledTimes(1);
  });
});

describe('API returning 403 during searching ', () => {
  test('text provided Enter but API returns an HTTP error', async () => {
    server.resetHandlers(
      rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
        return res(ctx.status(403), ctx.json(search.badAPIRequest()));
      })
    );

    render(
      <>
        <BrowserRouter>
          <Navbar />
          <AppContent>
            <HomePage />
          </AppContent>
        </BrowserRouter>
      </>
    );
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(await screen.findByTestId('error-msg')).toBeInTheDocument();
  });
});
