import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  display: none;
  padding: 0;

  @media screen and (max-width: 500px) {
    display: block;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledLi = styled.li`
  text-align: center;
  margin: 15px auto;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
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

export { StyledUl, StyledLi, StyledLink, StyledLinkTitle };
