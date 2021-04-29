import { useState, useEffect } from 'react';
import { SKINS, THEME_STORAGE_KEY } from '../constants';
import { storage } from '../storage';

function useSkin() {
  const [skin, setSkin] = useState(SKINS.Light);

  const setSkinValue = (value) => {
    storage.set(THEME_STORAGE_KEY, value);

    setSkin(value);
  };

  useEffect(() => {
    const localTheme = storage.get(THEME_STORAGE_KEY);

    if (localTheme) {
      setSkin(localTheme);
    }
  }, []);

  return { skin, setSkinValue };
}

export { useSkin };
