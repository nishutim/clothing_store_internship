import styled from 'styled-components'

export const DetailsGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  min-width: 300px;

  @media only screen and (max-width: 960px) {
    width: 100%;
    color: #4f4f4f;
    padding: 20px 5px 50px;
    
    & .gallery-altImgs {
      margin-right: 5%;
    }
  }

  & .gallery-altImgs {
    width: 10%;
    max-width: 100px;
    margin-right: 10%;
  }

  & .gallery-altImgs__item {
    width: 100%;
    margin-bottom: 30px;
    cursor: pointer;
  }

  & .gallery-mainImg {
    width: 70%;
  }

  & .gallery-mainImg__item {
    width: 100%;
  }
`
