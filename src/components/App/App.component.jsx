import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../core/Navbar';

import Sidebar from '../core/Sidebar';

import Wrapper from '../core/Wrapper';

import AppContent from '../core/AppContent';

import BlankPage from '../core/BlankPage';

import HomePage from '../../pages/Home';

import { VideoListProvider } from '../../utils/context/videoListContext';

import VideoDetailsPage from '../../pages/VideoDetails/VideoDetails.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Sidebar />
          <Wrapper>
            <VideoListProvider>
              <Navbar />
              <AppContent>
                <HomePage />
              </AppContent>
            </VideoListProvider>
          </Wrapper>
        </Route>
        <Route exact path="/video-details">
          <Sidebar />
          <Wrapper>
            <VideoListProvider>
              <Navbar />
              <AppContent>
                <VideoDetailsPage />
              </AppContent>
            </VideoListProvider>
          </Wrapper>
        </Route>
        <Route exact path="/#not-authorized">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <BlankPage />
            </AppContent>
          </Wrapper>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
