import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

:root{
  --clr-secondary: #EAE2B7;
  --clr-primary: #221e22;
  --clr-third: #D62828;
  --clr-fourth: #F77F00;
}
`;

export default GlobalStyles;
