import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  font-size: 1.1rem;
  font-family: 'Montserrat', Helvetica, Arial, serif;
  font-weight: 400;
  overflow-y: hidden;
  overflow-x: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 0.75rem;
`;

const StyledLi = styled.li`
  position: relative;
  white-space: nowrap;
  margin-bottom: 18px;

  ${(props) =>
    props.active &&
    `
    z-index: 1;
  `};

  ${(props) =>
    props.active &&
    `
    a {
      color: #dcdcdc;
      background: linear-gradient(118deg, #7367f0, #7367f0b3);
      box-shadow: 0 0 10px 1px rgb(115 103 240 / 70%);
      border-radius: 4px;
    }
  `};

  ${(props) =>
    props.active &&
    !props.expanded &&
    `
  a {
    background: ${props.theme.backgroundSidebarOption};
    box-shadow: none;
  }
`};

  :first-child {
    margin-top: 0.5rem;
  }

  :hover a > * {
    transition: transform 0.25s;
    transform: translateX(5px);
  }
`;

const StyledLink = styled(Link)`
  color: #6d6f97;
  margin: 0 15px;
  padding: 10px 15px 10px 15px;
  line-height: 1.45;
  text-overflow: ellipsis;
  overflow: hidden;
  align-items: center;
  ${(props) => !props.expanded && `width: 50px`};
  ${(props) => props.expanded && `width: calc(260px - 35px)`};
  display: flex;
  text-decoration: none;

  svg {
    margin-right: 1.1rem;
  }
`;

const StyledShadowBottom = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 100%;
  pointer-events: none;
  filter: blur(5px);
`;

const StyledLinkTitle = styled.span`
  ${(props) =>
    props.textTruncate &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export { StyledUl, StyledLi, StyledLink, StyledShadowBottom, StyledLinkTitle };
