import React from 'react';

import { StyledUl, StyledLi, StyledLink, StyledLinkTitle } from './HorizontalMenu.styles';

function MenuHorizontal() {
  return (
    <StyledUl role="menu">
      <StyledLi>
        <StyledLink to="/">
          <StyledLinkTitle textTruncate>Home</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/favorites">
          <StyledLinkTitle textTruncate>Favorites</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default MenuHorizontal;
