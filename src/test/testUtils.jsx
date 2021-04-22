import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { VideoListProvider } from '../utils/context/videoListContext';

const customWrapper = ({ children }) => {
  // console.log(children);
  return (
    <BrowserRouter>
      <Switch>
        <VideoListProvider>{children}</VideoListProvider>
      </Switch>
    </BrowserRouter>
  );
};

const customRender = (ui, options, route = '/') => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: customWrapper, ...options });
};
// const customRender = (ui, options) => {
//   return render(ui, { wrapper: customWrapper, ...options });
// };

export * from '@testing-library/react';

export { customRender as render };
