import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { VideoContextProvider } from '../providers/Videos';
import { ThemeContextProvider } from '../providers/Theme';
import GlobalStyle from '../globalStyle';

// Layouts
import BlankLayout from '../components/Layouts/BlankLayout';
import VerticalLayout from '../components/Layouts/VerticalLayout';
import HorizontalLayout from '../components/Layouts/HorizontalLayout';

const customWrapper = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <VideoContextProvider>{children}</VideoContextProvider>
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

const customWrapperWithHorizontalLayout = ({ children }) => {
  // All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Layouts.HorizontalLayout>{children}</Layouts.HorizontalLayout>
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

const customRender = (ui, options, route = '/') => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: customWrapper, ...options });
};

const customRenderWithLayout = (ui, options, route = '/') => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: customWrapperWithHorizontalLayout, ...options });
};
// const customRender = (ui, options) => {
//   return render(ui, { wrapper: customWrapper, ...options });
// };

export * from '@testing-library/react';

export { customRender as render, customRenderWithLayout };
