import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px;

  & h1 {
    font-size: 36px;
    letter-spacing: 3px;
    color: ${props => props.theme.main.hoverColor};
  }
`
