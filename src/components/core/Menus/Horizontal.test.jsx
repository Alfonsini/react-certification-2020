import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Horizontal from './Horizontal.component';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.body.appendChild(document.createElement('div'));
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Navbar horizontal', () => {
  test('Horizontal render', () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Route>
            <Horizontal />
          </Route>
        </BrowserRouter>,
        container
      );
    });

    expect(container.innerHTML).toContain(
      '<ul class="navbar-responsive-nav"><li class="active"><a class="nav-links disabledCursor" href="/"><span class="text-truncate ">Home</span></a></li><li><a class="nav-links disabledCursor" href="/"><span class="text-truncate ">Favorites</span></a></li></ul>'
    );
  });

  test('Horizontal home option', () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Route>
            <Horizontal />
          </Route>
        </BrowserRouter>,
        container
      );
    });

    expect(container.innerHTML).toContain('<span class="text-truncate ">Home</span>');
  });

  test('Horizontal home option', () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Route>
            <Horizontal />
          </Route>
        </BrowserRouter>,
        container
      );
    });

    expect(container.innerHTML).toContain(
      '<span class="text-truncate ">Favorites</span>'
    );
  });
});
