import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';

import { useTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faMoon,
  faSun,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

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
  DropdownContainer,
  Dropdown,
  DropdownItem,
  ItemLink,
} from './Navbar.styles';

import SearchForm from '../SearchForm';
import { ThemeContext } from '../../../providers/Theme/themeContext';
import { SKINS } from '../../../utils/constants';
import LoginModal from '../LoginModal';
import { useAuth } from '../../../providers/Auth';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { skin, setSkinValue } = useContext(ThemeContext);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSkin = () => {
    setSkinValue(skin === SKINS.Light ? SKINS.Dark : SKINS.Light);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleAuthMenu = () => {
    setIsOpen(true);
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);

    history.push('/');
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
            {/* TODO Separate in another component */}
            <DropdownContainer>
              <StyledToggleUserMenu className="disabledCursor">
                <FontAwesomeIcon
                  data-testid="user-button"
                  icon={faUser}
                  color={theme.iconColor}
                  height="21px"
                  onClick={toggleUserMenu}
                />
              </StyledToggleUserMenu>
              {showUserMenu && (
                <Dropdown
                  role="menu"
                  tabIndex="-1"
                  aria-labelledby="dropdown-7__BV_toggle_"
                  x-placement="bottom-start"
                >
                  <DropdownItem role="presentation">
                    {!authenticated && (
                      <ItemLink
                        role="menuitem"
                        to="/"
                        target="_self"
                        onClick={toggleAuthMenu}
                      >
                        <FontAwesomeIcon
                          data-testid="login-button"
                          icon={faSignInAlt}
                          color={theme.iconColor}
                          height="18px"
                        />
                        <span>Log in</span>
                      </ItemLink>
                    )}
                    {authenticated && (
                      <ItemLink
                        role="menuitem"
                        to="/"
                        target="_self"
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon
                          data-testid="logout-button"
                          icon={faSignOutAlt}
                          color={theme.iconColor}
                          height="18px"
                        />
                        <span>Logout</span>
                      </ItemLink>
                    )}
                  </DropdownItem>
                </Dropdown>
              )}
            </DropdownContainer>
          </StyledLi>
        </StyledUlRight>
      </StyledNav>
      <StyledMenu data-testid="nav-menu-horizontal" active={showMenu}>
        <MenuHorizontal />
      </StyledMenu>

      <LoginModal value={{ isOpen, setIsOpen }} />
    </>
  );
}

export default Navbar;
