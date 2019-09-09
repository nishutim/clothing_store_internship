import styled from 'styled-components'

export const SearchBarWrapper = styled.form`
  max-width: 500px;
  width: 40%;
  min-width: 100px;

  & input {
    display: block;
    width: 100%;
    border-radius: ${props => props.theme.main.borderRadius.s};
    padding: ${props => props.theme.main.indents.xs};
    font-size: ${props => props.theme.main.fontSizes.m};
  }
`
