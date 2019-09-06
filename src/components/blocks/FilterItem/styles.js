import styled from 'styled-components'

export const FilterOption = styled.input`
  display: block;
  font-size: ${props => props.theme.main.fontSizes.s};
  border: none;
  color: ${props =>
    props.currentFilterTagValue.toLowerCase() ===
    props.tagFilter.toLowerCase()
    ? props.theme.main.hoverColor : props.theme.main.textColor};
  background: ${props => props.theme.main.whiteColor};
  cursor: pointer;
  text-align: left;
  padding: ${props => props.theme.main.indents.halfXs};
  margin-bottom: ${props => props.theme.main.indents.halfXs};
  border-radius: ${props => props.theme.main.borderRadius.xs};

  :hover {
    box-shadow: 0 0 5px 1px ${props => props.theme.main.boxShadowColor};
  }
`
