import styled from 'styled-components'

export const DetailsInfoWrapper = styled.div`
  padding-top: ${props => props.theme.main.indents.s};
  padding-bottom: ${props => props.theme.main.sectionIndents.m};
  width: 40%;

  * {
    margin-bottom: ${props => props.theme.main.indents.halfS};
    text-align: justify;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  & span {
    font-weight: ${props => props.theme.main.fontWeights.bold};
    font-size: ${props => props.theme.main.fontSizes.s};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.main.letterSpacing.light};
  }

  & p {
    font-size: ${props => props.theme.main.fontSizes.l};
  }

  & h2 {
    font-weight: ${props => props.theme.main.fontWeights.normal};
    letter-spacing: ${props => props.theme.main.letterSpacing.light};
    font-size: ${props => props.theme.main.fontSizes.xl};
  }

  & h3 {
    font-weight: ${props => props.theme.main.fontWeights.bold};
    font-size: ${props => props.theme.main.fontSizes.l};
  }
`

export const Description = styled.div`
  position: relative;

  & div {
    font-size: ${props => props.theme.main.fontSizes.s};
    height: ${props => props.showDetails ? 'auto' : '100px'};
    overflow: ${props => props.showDetails ? 'auto' : 'hidden'};
  }
`

export const DescriptionMask = styled.div`
    width: 100%;
    position: ${props => props.showDetails ? 'relative' : 'absolute'};
    top: ${props => props.showDetails ? '0' : '100px'};
    background: ${props => props.theme.main.whiteColor};
    opacity: 0.9;

  & button {
    display: block;
    width: 200px;
    text-align: center;
    margin: 
      ${props => props.theme.main.indents.zero}
      ${props => props.theme.main.indents.auto};
    padding: ${props => props.theme.main.indents.halfXs};
    background: ${props => props.theme.main.whiteColor};
    border: 2px solid ${props => props.theme.main.textColor};
  }
  
  & button:hover {
    color: ${props => props.theme.main.hoverColor};
  }
`
