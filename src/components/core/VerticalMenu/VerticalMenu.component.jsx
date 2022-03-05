import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

import { StyledUl, StyledLi, StyledLink, StyledLinkTitle } from './VerticalMenu.styles';

function VerticalMenu(props) {
  return (
    <StyledUl role="list">
      <StyledLi expanded={props.expanded} active>
        <StyledLink to="/" expanded={props.expanded ? 1 : 0}>
          <FontAwesomeIcon icon={faHome} />
          <StyledLinkTitle textTruncate>Home</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
      <StyledLi expanded={props.expanded}>
        <StyledLink to="/favorites" expanded={props.expanded ? 1 : 0}>
          <FontAwesomeIcon icon={faStar} />
          <StyledLinkTitle textTruncate>Favorites</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default VerticalMenu;
