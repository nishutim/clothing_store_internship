import styled from 'styled-components'

export const FilterContainer = styled.div`
  position: relative;
  margin-top: ${props => props.theme.main.sectionIndents.m}; 


  & button {
    position: relative;
    font-size: ${props => props.theme.main.fontSizes.l};
    text-align: left;
    padding: ${props => props.theme.main.indents.halfXs};
    width: 150px;
    background: ${props => props.theme.main.transparentColor};
    border: none;
    border-bottom: 1px solid ${props => props.theme.main.boxShadowColor};
    cursor: pointer;
  }

  & button::after {
    content: "›" ;
    position: absolute;
    right: 1px;
    transform: rotate(90deg);
  }

  & button:hover {
    color: ${props => props.theme.main.hoverColor};
  }

  & div {
    position: absolute;
    top: 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    padding: 
      ${props => props.theme.main.indents.halfXs} 
      ${props => props.theme.main.indents.halfXs} 
      ${props => props.theme.main.indents.zero};
    background: ${props => props.theme.main.filterOptionsBg};
    box-shadow: 0 0 10px 2px ${props => props.theme.main.boxShadowColor};
    z-index: 1; 
  }
`
