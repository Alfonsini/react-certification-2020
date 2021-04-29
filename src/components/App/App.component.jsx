import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import routes from '../../configs/routes';

import { useAuth } from '../../providers/Auth';

// Layouts
import BlankLayout from '../Layouts/BlankLayout';
import VerticalLayout from '../Layouts/VerticalLayout';
import HorizontalLayout from '../Layouts/HorizontalLayout';
import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
import BlankPage from '../../pages/Blank';
import FavoritePage from '../../pages/Favorite';
import FavoriteVideoDetailsPage from '../../pages/FavoriteVideoDetails';

// All of the available layouts
const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

function App() {
  const { authenticated } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {/* <Layouts.HorizontalLayout>
              {routes.map((route) =>
                route.exac ? (
                  <Route
                    key={route.path}
                    exac
                    path={route.path}
                    component={route.component}
                  />
                ) : (
                  <Route key={route.path} path={route.path} component={route.component} />
                )
              )}
            </Layouts.HorizontalLayout> */}
        <Route exact path="/">
          <Layouts.HorizontalLayout>
            <HomePage />
          </Layouts.HorizontalLayout>
        </Route>
        <Route exact path="/video-details">
          <Layouts.HorizontalLayout>
            <VideoDetailsPage />
          </Layouts.HorizontalLayout>
        </Route>

        <Route exact path="/favorites">
          {!authenticated ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <Layouts.HorizontalLayout>
              <FavoritePage />
            </Layouts.HorizontalLayout>
          )}
        </Route>
        <Route exact path="/favorite-details">
          {!authenticated ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <Layouts.HorizontalLayout>
              <FavoriteVideoDetailsPage />
            </Layouts.HorizontalLayout>
          )}
        </Route>

        <Route exact path="/not-authorized">
          <Layouts.HorizontalLayout>
            <BlankPage />
          </Layouts.HorizontalLayout>
        </Route>
        <Route exact path="/*">
          <Layouts.HorizontalLayout>
            <BlankPage />
          </Layouts.HorizontalLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
