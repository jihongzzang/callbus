import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html{
    height: 100%;
    width: 100%;  
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    padding: 0;
    max-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    color: #222222;
  }

`;

export default GlobalStyle;
