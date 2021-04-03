import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../core/Navbar';

import Sidebar from '../core/Sidebar';

import Wrapper from '../core/Wrapper';

import AppContent from '../core/AppContent';

import BlankPage from '../core/BlankPage';

// import HomePage from '../../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Sidebar />
          <Wrapper>
            <Navbar />
            {/* <AppContent>
              <HomePage />
            </AppContent> */}
          </Wrapper>
        </Route>
        <Route exact path="/not-authorized">
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
