import React, { useState } from 'react';

import VerticalMenu from '../VerticalMenu';
import Brand from '../Brand';

import { StyledAside, StyledShadowBottom } from './Sidebar.styles';

function Sidebar() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <StyledAside
      onMouseOver={() => toggleHover()}
      onMouseOut={() => toggleHover()}
      expanded={hover}
      role="menubar"
    >
      <Brand expanded={hover} />

      <StyledShadowBottom />

      <VerticalMenu expanded={hover} />
    </StyledAside>
  );
}

export default Sidebar;
