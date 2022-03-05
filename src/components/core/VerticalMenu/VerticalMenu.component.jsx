import React from 'react';
import { useLocation } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

import { StyledUl, StyledLi, StyledLink, StyledLinkTitle } from './VerticalMenu.styles';
import { useAuth } from '../../../providers/Auth';

function VerticalMenu(props) {
  const location = useLocation();

  const { authenticated } = useAuth();

  return (
    <StyledUl role="list">
      <StyledLi
        expanded={props.expanded}
        active={location.pathname && location.pathname === '/' ? 1 : 0}
      >
        <StyledLink to="/" expanded={props.expanded ? 1 : 0}>
          <FontAwesomeIcon icon={faHome} />
          <StyledLinkTitle textTruncate>Home</StyledLinkTitle>
        </StyledLink>
      </StyledLi>
      {authenticated && (
        <StyledLi
          expanded={props.expanded}
          active={location.pathname && location.pathname === '/favorites' ? 1 : 0}
        >
          <StyledLink to="/favorites" expanded={props.expanded ? 1 : 0}>
            <FontAwesomeIcon icon={faStar} />
            <StyledLinkTitle textTruncate>Favorites</StyledLinkTitle>
          </StyledLink>
        </StyledLi>
      )}
    </StyledUl>
  );
}

export default VerticalMenu;
