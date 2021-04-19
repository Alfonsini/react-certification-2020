import styled from 'styled-components';

const StyledSearch = styled.div`
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
    color: #e5e5e5;
    margin: 0.6rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  flex: 1;
  outline: 0;
  border: solid 0 #ccc;
  border-radius: 30px;
  width: 100%;
  height: 40px;

  ::placeholder {
    color: #b6b8bf;
    opacity: 1; /* Firefox */
  }
`;

export { StyledSearch, StyledInput };
