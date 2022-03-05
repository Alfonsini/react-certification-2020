import React from 'react';

import { StyledWrapper } from './Wrapper.styles';

function Wrapper({ children }) {
  return <StyledWrapper role="main">{children}</StyledWrapper>;
}

export default Wrapper;
