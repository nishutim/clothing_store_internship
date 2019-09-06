import styled from 'styled-components'

export const DetailsGalleryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  min-width: 300px;

  @media only screen and (max-width: 960px) {
    width: 100%;
    padding: 
      ${props => props.theme.main.indents.s} 
      ${props => props.theme.main.indents.halfXs} 
      ${props => props.theme.main.sectionIndents.m};
  }
`

export const AltImgs = styled.div`
  width: 10%;
  max-width: 100px;
  margin-right: 10%;

  @media only screen and (max-width: 960px) {    
    margin-right: 5%;
  }

  & img {
    width: 100%;
    margin-bottom: 50%;
    cursor: pointer;
  }
`

export const MainImgWrapper = styled.div`
  width: 70%;

  & img {
    width: 100%;
  }
`
