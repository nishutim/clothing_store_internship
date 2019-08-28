import styled from 'styled-components'

export const ProductDetailsWrapper = styled.div`
  margin: 0 auto;
  width: 80%;

  & button {
    padding: 5px;
    margin-top: 30px;
    border: 1px solid ${props => props.theme.main.textColor};
    background: transparent;
    cursor: pointer;
  }

  & button:hover {
    color: ${props => props.theme.main.hoverColor};
 }
`

export const ProductDetailsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 50px;
`
