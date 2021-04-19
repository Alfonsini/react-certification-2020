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

  margin-top: 1rem;
`;

const StyledLi = styled.li`
  position: relative;
  white-space: nowrap;
  margin-bottom: 18px;
`;

const StyledLink = styled.a`
  color: #7367f0;
  margin: 0 15px;
  padding: 10px 15px 10px 15px;
  line-height: 1.45;
  text-overflow: ellipsis;
  overflow: hidden;
  align-items: center;
  ${(props) => !props.expanded && `width: 50px`};
  ${(props) => props.expanded && `width: calc(260px - 35px)`};
  display: flex;

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
