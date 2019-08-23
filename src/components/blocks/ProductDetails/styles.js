import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
  margin: 0 auto;
  width: 80%;

  & .details-exitBtn {
    padding: 5px;
    margin-top: 30px;
    border: 1px solid #333;
    color: #333;
    background: transparent;
    text-transform: uppercase;
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

// export const ProductDetsContainer = styled.div`
//   margin-top: 50px;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   padding-top: 50px;

// `
// export const ProductDetsExitBtn = styled.button`
//   padding: 5px;
//   margin-top: 30px;
//   border: 1px solid #333;
//   color: #333;
//   background: transparent;
//   text-transform: uppercase;
//   cursor: pointer;

//   :hover {
//     color: #d91818;
//   }
// `
