import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${(props) => `${props.theme.backgroundColorBody}`};
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background-color: 
  ${(props) => props.theme.backgroudColorBody};
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  display: inline;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

`;

export default GlobalStyle;
