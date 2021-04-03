import { SKINS } from '../utils/constants';

const themeConfig = {
  app: {
    appName: 'Video player',
    appLogoIcon: '',
  },
  layout: {
    skin: SKINS.Light, // light, dark
    // skin: [
    //   {
    //     name: 'light',
    //     selected: true,
    //     backgroundBody: '#020635',
    //   },
    //   {
    //     name: 'dark',
    //     selected: false,
    //     backgroundBody: '#020635',
    //   },
    // ],
  },
};

export default themeConfig;
