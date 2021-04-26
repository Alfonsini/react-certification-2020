import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './themeContext';

import { darkTheme, lightTheme } from '../../configs/themeConfigs';
import { SKINS } from '../../utils/constants';
import { useSkin } from '../../utils/hooks';

const ThemeContextProvider = ({ children }) => {
  const { skin, setValue } = useSkin();

  return (
    <ThemeContext.Provider value={{ skin, setValue }}>
      <ThemeProvider theme={skin === SKINS.Light ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
