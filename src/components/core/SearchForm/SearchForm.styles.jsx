import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 500px;
  }

  @media screen and (min-width: 990px) {
    display: flex;
    width: 800px;
  }

  svg {
    position: absolute;
    right: 0;
    margin: 0.6rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  flex: 1;
  outline: 0;
  border: solid ${(props) => props.theme.inputBorder};
  border-width: 1px;
  border-radius: 30px;
  width: 100%;
  height: 40px;

  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};
  color: ${(props) => `${props.theme.text}`};

  :placeholder {
    color: #b6b8bf;
    opacity: 1; /* Firefox */
  }

  :focus {
    border: solid ${(props) => props.theme.inputBorderFocus};
    border-width: 1px;
  }
`;

export { StyledDiv, StyledInput };
