import styled from 'styled-components'

export const DetailsInfoWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  width: 40%;

  * {
    margin-bottom: 15px;
    text-align: justify;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  & span {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  & p {
    font-size: 20px;
  }

  & h2 {
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 24px;
  }

  & h3 {
    font-weight: bold;
    font-size: 20px;
  }
`

export const Description = styled.div`
  position: relative;

  & div {
    font-size: 16px;
    height: ${props => props.showMoreInfo ? 'auto' : '100px'};
    overflow: ${props => props.showMoreInfo ? 'auto' : 'hidden'};
  }
`

export const DescriptionMask = styled.div`
    width: 100%;
    position: ${props => props.showMoreInfo ? 'relative' : 'absolute'};
    top: ${props => props.showMoreInfo ? '0' : '100px'};
    background: #fff;
    opacity: 0.9;

  & button {
    display: block;
    width: 200px;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    background: #fff;
    border: 2px solid ${props => props.theme.main.textColor};
  }
  
  & button:hover {
    color: ${props => props.theme.main.hoverColor};
  }
`
