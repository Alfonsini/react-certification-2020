import styled from 'styled-components';

const StyledToggleIcon = styled.span`
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

export {
  StyledMenu,
  StyledNav,
  StyledToggleIcon,
  StyledUlLeft,
  StyledUlRight,
  StyledLi,
  StyledToggleUserMenu,
};
