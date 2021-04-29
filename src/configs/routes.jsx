import HomePage from '../pages/Home';
import VideoDetailsPage from '../pages/VideoDetails';
import BlankPage from '../pages/Blank';
import FavoritePage from '../pages/Favorite';

const routes = [
  {
    path: '/',
    component: HomePage,
    exac: true,
  },
  {
    path: '/video-details',
    component: VideoDetailsPage,
    exac: true,
  },
  {
    path: '/favorites',
    component: FavoritePage,
    exac: true,
  },
  {
    path: '/favorite-details',
    component: BlankPage,
    exac: true,
  },
  {
    path: '/not-authorized',
    component: BlankPage,
    exac: true,
  },
  {
    path: '/*',
    component: BlankPage,
    exac: false,
  },
];

export default routes;
