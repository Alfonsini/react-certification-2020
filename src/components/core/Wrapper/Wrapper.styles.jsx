import styled from 'styled-components';

const StyledWrapper = styled.main`
  position: fixed;
  left: 0;
  height: 100%;

  margin-left: 80px;
  margin-right: 0px;
  margin-top: 10px;

  width: 100%;
  background-color: #f6f5f7;
  border-radius: 0.428rem;

  width: calc(100% - 90px);
  height: calc(100% - 20px);

  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
    margin-left: 10px;
  }
`;

export { StyledWrapper };
