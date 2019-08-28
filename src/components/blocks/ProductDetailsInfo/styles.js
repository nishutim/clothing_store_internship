import styled from 'styled-components'

export const DetailsInfo = styled.div`
  * {
    margin-bottom: 15px;
    text-align: justify;
  }

  padding-top: 20px;
  padding-bottom: 50px;
  width: 40%;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  & h4, span {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  & p {
    font-size: 20px;
  }

  & .details-info__name {
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 24px;
  }

  & .details-info__price {
    font-weight: bold;
  }

  & .details-info-desc {
    position: relative;
  }

  & .details-info-desc__description {
    font-size: 16px;
    height: 100px;
    overflow: hidden;
  }

  & .details-info-desc-mask {
    position: absolute;
    width: 100%;
    top: 100px;
    background: #fff;
    opacity: 0.9;
    padding: 20px;
  }

  & .details-info-desc-mask__btn {
    display: block;
    width: 200px;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    background: #fff;
    border: 2px solid #4f4f4f;
  }
  
  & .details-info-desc-mask__btn:hover {
    color: #d91818;
  }
`
