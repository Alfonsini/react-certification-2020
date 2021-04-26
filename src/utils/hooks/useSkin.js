import { useState, useEffect } from 'react';
import { SKINS, THEME_STORAGE_KEY } from '../constants';

function useSkin() {
  const [skin, setSkin] = useState(SKINS.Light);

  const setValue = (value) => {
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
    setSkin(value);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (localTheme) setSkin(localTheme);
  }, []);

  return { skin, setValue };
}

export { useSkin };
