import styled from 'styled-components';

const StyledWrapper = styled.main`
  position: fixed;
  left: 0;
  height: 100%;

  margin-left: 85px;
  margin-right: 0px;
  margin-top: 10px;

  width: 100%;
  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 0.428rem;

  width: calc(100% - 95px);
  height: calc(100% - 20px);

  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
    margin-left: 10px;
  }
`;

export { StyledWrapper };
