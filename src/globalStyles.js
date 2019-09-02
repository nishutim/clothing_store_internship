import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${props => props.theme.main.fontFamily};
    margin: ${props => props.theme.main.margin};
    padding: ${props => props.theme.main.padding};
    text-decoration: ${props => props.theme.main.textDecoration};
    box-sizing: ${props => props.theme.main.boxSizing};
    color: ${props => props.theme.main.textColor};
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
