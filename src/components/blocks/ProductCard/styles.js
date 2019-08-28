import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  min-width: 200px;
  margin-bottom: 30px;
  padding: 2% 2%;

  :hover{
    cursor: pointer;
    box-shadow: 0 0 5px 1px ${props => props.theme.main.boxShadowColor};
  }

  @media only screen and (max-width: 960px) {
    width: 40%;
  }

  @media only screen and (max-width: 515px) {
    width: 80%;
  }

  & img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ProductCardDescription = styled.div`
& p {
  margin-bottom: 5px;
  padding-left: 10px;
}

& p:last-child {
  font-weight: bold;
}
`
