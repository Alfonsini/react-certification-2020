import React from 'react';
import { server, rest } from '../../../test/server';
import * as search from '../../../test/search';
import {
  customRenderWithLayout,
  render,
  screen,
  fireEvent,
} from '../../../test/testUtils';

import HomePage from '../../../pages/Home';

import SearchForm from '.';

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(window, 'fetch');
});

describe('Search field', () => {
  test('render correctly', () => {
    render(<SearchForm />);

    const div = screen.getByTestId('search-div');
    expect(div).toMatchSnapshot();
  });

  test('input in place', () => {
    render(<SearchForm />);

    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
  });

  test('search icon in place', () => {
    render(<SearchForm />);

    const button = screen.getByTestId('search-icon');
    expect(button).toMatchSnapshot();
    expect(button).toHaveClass('fa-search');
  });

  test('testing input value', () => {
    render(<SearchForm />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });

    expect(input.value).toBe('wizeline');
  });

  test('type some text is requiered to search using search icon', async () => {
    customRenderWithLayout(<HomePage />);

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(window.fetch).toBeCalledTimes(0);
  });

  test('check how many calls has done on successful search', async () => {
    customRenderWithLayout(<HomePage />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    await screen.findAllByTestId('video-section');

    expect(window.fetch).toBeCalledTimes(1);
  });

  test('check the correct concat of the URL', async () => {
    customRenderWithLayout(<HomePage />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    await screen.findAllByTestId('home-video-col');

    const PART = 'snippet';
    const MAX_RESULTS = 25;
    const ORDER = 'rating';
    const TYPE = 'video';

    expect(window.fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&key=${process.env.REACT_APP_API_KEY}&q=${input.value}`
    );
  });

  test('rendering searching successful using input', async () => {
    customRenderWithLayout(<HomePage />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    const count = await (await screen.findAllByTestId('video-section')).length;
    expect(count).toBe(25);
  });

  test('rendering searching successful using search icon', async () => {
    customRenderWithLayout(<HomePage />);

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.click(button);

    const count = await (await screen.findAllByTestId('video-section')).length;
    expect(count).toBe(25);
  });

  test('text provided but Up key was pressed', async () => {
    customRenderWithLayout(<HomePage />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'ArrowUp', code: 'ArrowUp' });

    expect(window.fetch).toBeCalledTimes(0);
  });

  test('text provided search icon was pressed but is loading', async () => {
    customRenderWithLayout(<HomePage />);

    const button = screen.getByTestId('search-icon');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.click(button);
    fireEvent.click(button);

    expect(window.fetch).toBeCalledTimes(1);
  });

  test('text provided Enter key was pressed but is Loading', async () => {
    customRenderWithLayout(<HomePage />);

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

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

    // server.printHandlers();

    customRenderWithLayout(<HomePage />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    expect(await screen.findByTestId('error-msg')).toBeInTheDocument();
  });
});
