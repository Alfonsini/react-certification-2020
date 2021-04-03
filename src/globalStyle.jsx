import { createGlobalStyle } from 'styled-components';
import { SKINS } from './utils/constants';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
  ${(props) => (props.theme.layout.skin === SKINS.Light ? '#f8f8f8' : '#020635')};
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  display: inline;
}

.card {
  width: 30%;
  display: flex;
  background: #eee;
  padding: 0.6em 1em 0.6em 0.6em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
  border: solid 1px #ccc;
}

.wrapper {
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
}

.disabledCursor {
  cursor: default;
  pointer-events: none;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

@media screen and (max-width: 500px) {
  .wrapper {
    width: calc(100% - 20px);
    margin-left: 10px;
  }
}


`;
export default GlobalStyle;
