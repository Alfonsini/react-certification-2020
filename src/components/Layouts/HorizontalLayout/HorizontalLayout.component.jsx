import React from 'react';
import { VideoContextProvider } from '../../../providers/Videos';
import AppContent from '../../core/AppContent';
import Navbar from '../../core/Navbar';
import Sidebar from '../../core/Sidebar';
import Wrapper from '../../core/Wrapper';

import './HorizontalLayout.styles.css';

function HorizontalLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <VideoContextProvider>
          <Navbar />
          <AppContent>{children}</AppContent>
        </VideoContextProvider>
      </Wrapper>
    </>
  );
}

export default HorizontalLayout;
