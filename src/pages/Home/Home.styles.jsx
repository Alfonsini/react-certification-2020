import styled from 'styled-components';

const StyledCol = styled.div`
  margin: 5px 5px 10px 5px;
  padding: 6px 6px 6px 6px;
`;

const StyledRow = styled.div`
  margin: 0;
  width: 95.5%;

  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: left;
  flex-flow: column;
  flex-direction: row;
  flex-wrap: wrap;
`;

export { StyledCol, StyledRow };
