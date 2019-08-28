import styled from 'styled-components'

export const FilterContainer = styled.div`
  position: relative;
  margin: 50px 0 30px;

  & button {
    position: relative;
    text-align: left;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 18px;
    width: 150px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #bfbfbf;
    cursor: pointer;
  }

  & button::after {
    content: "›" ;
    position: absolute;
    font-size: 20px;
    right: 1px;
    transform: rotate(90deg);
  }

  & button:hover {
    color: ${props => props.theme.main.hoverColor};
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    position: absolute;
    top: 33px;
    padding: 5px 5px 0px;
    background: ${props => props.theme.main.filterOptionsBg};
    box-shadow: 0 0 10px 2px ${props => props.theme.main.boxShadowColor};
    z-index: 1; 
  }
`
