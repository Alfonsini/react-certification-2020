import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import themeConfig from './configs/themeConfigs';
import App from './components/App';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeConfig}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
