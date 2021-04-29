import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './globalStyle';
import AuthProvider from './providers/Auth';
import ThemeContextProvider from './providers/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
