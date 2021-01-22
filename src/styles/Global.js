import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 60%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
  }
`;

export default GlobalStyles;
