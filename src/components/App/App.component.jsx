import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BlankPage from '../../pages/Blank';

import HomePage from '../../pages/Home';

import VideoDetailsPage from '../../pages/VideoDetails/VideoDetails.page';

// Layouts
import BlankLayout from '../Layouts/BlankLayout';
import VerticalLayout from '../Layouts/VerticalLayout';
import HorizontalLayout from '../Layouts/HorizontalLayout';

function App() {
  // All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

  return (
    <BrowserRouter>
      <Switch>
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
        <Route exact path="/not-authorized">
          <Layouts.HorizontalLayout>
            <BlankPage />
          </Layouts.HorizontalLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
