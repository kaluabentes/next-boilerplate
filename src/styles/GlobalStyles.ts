import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  html: {
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    font-family: ${(props) => props.theme.typography.fontFamily};
  }
`

export default GlobalStyles
