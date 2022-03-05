import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledToggleThemeIcon = styled.span`
  display: block;
  cursor: pointer;
  margin-right: 15px;

  @media screen and (max-width: 500px) {
    display: none;
    margin-left: 0px;
  }
`;

const StyledToggleMenuIcon = styled.span`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: block;
    margin-left: 30px;
  }
`;

const StyledToggleUserMenu = styled.span`
  text-decoration: none;
  cursor: pointer;
`;

const StyledMenu = styled.menu`
  display: none;
  font-size: 18px;
  margin-top: 80px;
  padding: 0;

  ${(props) =>
    props.active &&
    `
    display: block;
  `};
`;

const StyledNav = styled.nav`
  font-size: 18px;
  margin: 10px 10px;
  position: fixed;
  border-radius: 0.428rem;
  display: flex;
  padding: 1px;
  align-items: center;
  max-height: 80px;
  min-height: 80px;

  width: calc(100% - 110px);

  @media screen and (max-width: 500px) {
    margin: 10px 10px;
  }
`;

const StyledUlLeft = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 30px;
  align-items: center;
  width: 50%;
`;

const StyledUlRight = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 30px;
  align-items: flex-end;
  right: 0;
  position: absolute;

  @media screen and (max-width: 500px) {
    margin-right: -30px;
  }
`;

const StyledLi = styled.li`
  margin: 0;
`;

const DropdownContainer = styled.div`
  border-radius: 0.357rem;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

const Dropdown = styled.ul`
  z-index: 10;
  min-width: 10rem;
  font-size: 1rem;
  color: #6e6b7b;
  list-style: none;

  padding: 0.5rem 0;
  margin: 0 0 0;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(34, 41, 47, 0.05);

  text-align: left;

  left: auto;
  right: -2px;

  border-radius: 0.358rem;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-box-shadow: 0 5px 25px rgb(34 41 47 / 10%);
  box-shadow: 0 5px 25px rgb(34 41 47 / 10%);

  opacity: 1;
  display: block;
  float: none;
  position: absolute;
  transform: scale(1);
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
  width: 12rem;
  top: 25px;
  margin-top: 5px;
`;

const DropdownItem = styled.li`
  line-height: 1.5;
  box-sizing: border-box;
`;

const ItemLink = styled(Link)`
  text-decoration: none;

  font-weight: 400;
  color: #6e6b7b;
  white-space: nowrap;

  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  padding: 0.65rem 1.28rem;
  clear: both;
  text-align: inherit;
  background-color: transparent;
  border: 0;

  width: auto;

  z-index: 11;

  svg {
    margin-right: 0.4rem;
  }

  svg,
  span {
    z-index: 1;
  }

  :hover {
    background-color: grey;
  }
`;

export {
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
};
