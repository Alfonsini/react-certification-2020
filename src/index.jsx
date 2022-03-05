import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './globalStyle';
import { ThemeContextProvider } from './providers/Theme/themeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
