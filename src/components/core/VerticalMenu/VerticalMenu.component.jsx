import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

import { StyledUl, StyledLi, StyledLink, StyledLinkTitle } from './VerticalMenu.styles';

function VerticalMenu(props) {
  return (
    <StyledUl>
      <StyledLi expanded={props.expanded} active>
        <StyledLink to="/" expanded={props.expanded} className="disabledCursor">
          <FontAwesomeIcon icon={faHome} />
          <StyledLinkTitle textTruncate>Home</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
      <StyledLi expanded={props.expanded}>
        <StyledLink to="/" expanded={props.expanded} className="disabledCursor">
          <FontAwesomeIcon icon={faStar} />
          <StyledLinkTitle textTruncate>Favorities</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default VerticalMenu;
