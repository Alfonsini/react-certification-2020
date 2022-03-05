import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

import MenuHorizontal from '../HorizontalMenu/HorizontalMenu.component';

import {
  StyledMenu,
  StyledNav,
  StyledToggleIcon,
  StyledUlLeft,
  StyledUlRight,
  StyledLi,
  StyledToggleUserMenu,
} from './Navbar.styles';

import Search from '../Search';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <StyledNav data-testid="nav">
        <StyledToggleIcon>
          <FontAwesomeIcon
            data-testid="toggle-button"
            icon={faBars}
            onClick={toggleShowMenu}
          />
        </StyledToggleIcon>
        <StyledUlLeft>
          <StyledLi>
            <Search />
          </StyledLi>
        </StyledUlLeft>
        <StyledUlRight>
          <StyledLi>
            <StyledToggleUserMenu className="disabledCursor">
              <FontAwesomeIcon data-testid="user-button" icon={faUser} />
            </StyledToggleUserMenu>
          </StyledLi>
        </StyledUlRight>
      </StyledNav>

      <StyledMenu data-testid="nav-menu-horizontal" active={showMenu}>
        <MenuHorizontal />
      </StyledMenu>
    </>
  );
}

export default Navbar;
