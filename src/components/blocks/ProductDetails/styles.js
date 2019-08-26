import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
  margin: 0 auto;
  width: 80%;

  & .details-exitBtn {
    padding: 5px;
    margin-top: 30px;
    border: 1px solid #4f4f4f;
    background: transparent;
    cursor: pointer;
  }

  & .details-exitBtn:hover {
    color: #d91818;
 }

  & .details-container {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 50px;
  }
`
