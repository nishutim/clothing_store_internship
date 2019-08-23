import styled from 'styled-components'

export const FilterBarFilter = styled.div`
  position: relative;
  margin: 50px 0 30px;

  & .filter-name {
    position: relative;
    text-align: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 18px;
    color: #4f4f4f;
    width: 150px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #bfbfbf;
    cursor: pointer;
  }

  & .filter-name::after {
    content: "›" ;
    position: absolute;
    font-size: 20px;
    right: 1px;
    transform: rotate(90deg);
  }

  & .filter-name:hover {
    color: #d91818;
  }

  & .filter-options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    position: absolute;
    top: 33px;
    padding: 5px 5px 0px;
    background: #f2f2f2;
    box-shadow: 0 0 10px 2px #bfbfbf;
    z-index: 1; 
  }
`
