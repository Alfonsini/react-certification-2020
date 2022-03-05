import React from 'react';

import './AppContent.styles.css';

function AppContent({ children }) {
  return <div className="app-content scroll ">{children}</div>;
}

export default AppContent;
