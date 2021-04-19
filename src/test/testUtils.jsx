import React from 'react';
import { render } from '@testing-library/react';
import { VideoListProvider } from '../utils/context/videoListContext';

const AllProviders = ({ children }) => {
  return <VideoListProvider>{children}</VideoListProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
