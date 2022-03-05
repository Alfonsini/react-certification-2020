import React, { useState, useContext } from 'react';

import { useTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import MenuHorizontal from '../HorizontalMenu/HorizontalMenu.component';

import {
  StyledMenu,
  StyledNav,
  StyledToggleThemeIcon,
  StyledToggleMenuIcon,
  StyledUlLeft,
  StyledUlRight,
  StyledLi,
  StyledToggleUserMenu,
} from './Navbar.styles';

import SearchForm from '../SearchForm';
import { ThemeContext } from '../../../providers/Theme/themeContext';
import { SKINS } from '../../../utils/constants';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { skin, setValue } = useContext(ThemeContext);
  const theme = useTheme();

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSkin = () => {
    setValue(skin === SKINS.Light ? SKINS.Dark : SKINS.Light);
  };

  return (
    <>
      <StyledNav data-testid="nav">
        <StyledToggleMenuIcon>
          <FontAwesomeIcon
            data-testid="toggle-button"
            icon={faBars}
            onClick={toggleShowMenu}
            color={theme.iconColor}
            height="21px"
          />
        </StyledToggleMenuIcon>
        <StyledUlLeft>
          <StyledLi>
            <SearchForm />
          </StyledLi>
        </StyledUlLeft>
        <StyledUlRight>
          <StyledLi>
            <StyledToggleThemeIcon>
              <FontAwesomeIcon
                data-testid="toggle-theme-button"
                icon={skin === SKINS.Dark ? faSun : faMoon}
                onClick={toggleSkin}
                color={theme.iconColor}
                height="21px"
              />
            </StyledToggleThemeIcon>
          </StyledLi>
          <StyledLi>
            <StyledToggleUserMenu className="disabledCursor">
              <FontAwesomeIcon
                data-testid="user-button"
                icon={faUser}
                color={theme.iconColor}
                height="21px"
              />
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
