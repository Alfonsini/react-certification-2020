import styled from 'styled-components';

const AppContentDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: calc(100% - 21px);
  height: calc(100% - 110px);
  padding: 10px 0px 10px 0px;

  margin: 100px 0 0 10px;

  backface-visibility: hidden;
  border-radius: 0.428rem;

  box-sizing: border-box;

  display: flex;
  justify-content: center;

  ${(props) =>
    props.isScrollable &&
    `
    overflow-x: hidden;
    overflow-y: scroll;
  `}
`;

// .navbar-responsive-container[class*='active'] ~ .app-content {
//   margin-top: calc(100px - 80px);
// }

export { AppContentDiv };
