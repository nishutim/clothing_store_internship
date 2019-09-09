import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding:
    ${props => props.theme.main.sectionIndents.m} 
    ${props => props.theme.main.indents.xs};

  & h1 {
    font-size: ${props => props.theme.main.fontSizes.headerSize};
    letter-spacing: ${props => props.theme.main.letterSpacing.caps};
    color: ${props => props.theme.main.hoverColor};
  }
`
