import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.7;
      color: #777;
      padding: 30px;
  }
`

export default GlobalStyle;