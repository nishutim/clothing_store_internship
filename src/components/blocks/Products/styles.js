import styled from 'styled-components'

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 
    ${props => props.theme.main.sectionIndents.l}
    ${props => props.theme.main.indents.zero}; 
`
