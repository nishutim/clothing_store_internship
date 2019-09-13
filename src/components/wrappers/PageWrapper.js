import styled from 'styled-components'

export const PageWrapper = styled.div`
  min-width: 300px;
  width: 80%;
  max-width: 1200px;
  margin:  
    ${props => props.theme.main.indents.zero}
    ${props => props.theme.main.indents.auto};
`
