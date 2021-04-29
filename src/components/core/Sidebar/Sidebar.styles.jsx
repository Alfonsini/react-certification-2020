import styled from 'styled-components';

const StyledAside = styled.aside`
  z-index: 1031;
  height: 100vh;
  left: 0;
  width: ${(props) => (props.expanded ? '260px' : '4.2em')};
  background-color: ${(props) => `${props.theme.backgroundColorSidebar}`};
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);

  position: fixed;
  transition: width 0.2s ease;

  @media screen and (min-width: 768px) {
    display: table-cell;
  }

  @media screen and (max-width: 500px) {
    display: none;
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

export { StyledAside, StyledShadowBottom };
