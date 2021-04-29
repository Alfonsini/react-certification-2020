import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { StyledUl, StyledLi, StyledLink, StyledLinkTitle } from './Brand.styles';

function Brand(props) {
  return (
    <StyledUl role="list">
      <StyledLi>
        <StyledLink to="/" expanded={props.expanded}>
          <FontAwesomeIcon icon={faPlay} />
          <StyledLinkTitle textTruncate>Player</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default Brand;
