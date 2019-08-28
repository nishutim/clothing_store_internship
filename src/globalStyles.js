import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    color: #4f4f4f;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`
