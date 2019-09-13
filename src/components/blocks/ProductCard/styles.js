import styled from 'styled-components'

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  min-width: 200px;
  margin-bottom: ${props => props.theme.main.sectionIndents.s};
  padding: ${props => props.theme.main.indents.s};

  :hover{
    cursor: pointer;
    box-shadow: 0 0 5px 1px ${props => props.theme.main.boxShadowColor};
  }

  @media only screen and (max-width: 960px) {
    width: 40%;
    padding: ${props => props.theme.main.indents.xs};
  }

  @media only screen and (max-width: 515px) {
    width: 80%;
    padding: ${props => props.theme.main.indents.xs};
  }

  & img {
    display: block;
    width: 100%;
    margin-bottom: ${props => props.theme.main.indents.xs};
  }
`

export const ErrorCaseBlock = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.main.indents.xs};
  & * { text-align: center; }

  & h2 {
    font-weight: ${props => props.theme.main.fontWeights.bold};
    font-size: ${props => props.theme.main.fontSizes.headerSize};
    color: ${props => props.theme.main.hoverColor}
  }

  & p {
    font-size: ${props => props.theme.main.fontSizes.l}
  }
`

export const ProductCardDescription = styled.div`
& p {
  margin-bottom: ${props => props.theme.main.indents.halfXs};
  padding-left: ${props => props.theme.main.indents.xs};
}

& p:last-child {
  font-weight: ${props => props.theme.main.fontWeights.bold};
}
`
