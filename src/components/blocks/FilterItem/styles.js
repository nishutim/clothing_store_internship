import styled from 'styled-components'

export const FilterOption = styled.input`
  display: block;
  font-size: 100%;
  border: none;
  color: ${props =>
    props.currentFilterTagValue.toLowerCase() ===
    props.tagFilter.toLowerCase()
    ? '#d91818' : '#4f4f4f'
  };
  background: #fff;
  cursor: pointer;
  text-align: left;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;

  :hover {
    box-shadow: 0 0 5px 1px ${props => props.theme.main.boxShadowColor};
  }
`
