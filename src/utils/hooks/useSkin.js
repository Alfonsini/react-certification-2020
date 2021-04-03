import { useState, useEffect } from 'react';

import themeConfig from '../../configs/themeConfigs';

function useSkin() {
  const [skin, setSkin] = useState(() => {
    // Recover de initial state
    return themeConfig.layout.skin;
  });

  const setValue = (value) => {
    setSkin(value);
  };

  useEffect(() => {
    // Change the skin updating the VDOM
  }, [skin]);

  return { skin, setValue };
}

export { useSkin };
