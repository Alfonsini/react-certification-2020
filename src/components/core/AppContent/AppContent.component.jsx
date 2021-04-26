import React from 'react';

import './AppContent.styles.css';
import { AppContentDiv } from './AppContent.styles';

function AppContent({ children }) {
  return <AppContentDiv className="app-content scroll ">{children}</AppContentDiv>;
}

export default AppContent;
