import styled from 'styled-components'

export const ProductDetailsWrapper = styled.div`
  margin: 
    ${props => props.theme.main.indents.zero}
    ${props => props.theme.main.indents.auto};
  width: 80%;

  & button {
    padding: ${props => props.theme.main.indents.halfXs};
    margin-top: ${props => props.theme.main.sectionIndents.s};
    border: 1px solid ${props => props.theme.main.textColor};
    background: ${props => props.theme.main.transparentColor};
    cursor: pointer;
  }

  & button:hover {
    color: ${props => props.theme.main.hoverColor};
 }

 & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: ${props => props.theme.main.sectionIndents.l};
 }
`
