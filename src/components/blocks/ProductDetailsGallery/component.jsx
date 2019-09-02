import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { DetailsGalleryWrapper, AltImgs, MainImgWrapper } from './styles'

export default class ProductDetailsGallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMainPic:
        this.props.productInfo.images.length
          ? this.props.productInfo.images[0]
          : 'Oops, showing some other picture',
    }
  }

  handlePicClick = url => {
    this.setState({
      currentMainPic: url,
    })
  }

  render () {
    const { currentMainPic } = this.state
    const { productInfo } = this.props
    const { title, images } = productInfo

    return (
      <DetailsGalleryWrapper>
        <AltImgs>
          {images.length ? images.map(url => (
            <img
              key={url}
              src={url}
              alt={title}
              onClick={() => this.handlePicClick(url)} />
          )) : <p>Oops, something went wrong!</p>}
        </AltImgs>
        <MainImgWrapper>
          {images.length
            ? <img
              src={currentMainPic}
              alt={title} />
            : <p>Oops, something went wrong!</p>}
        </MainImgWrapper>
      </DetailsGalleryWrapper>
    )
  }
}

ProductDetailsGallery.propTypes = {
  productInfo: PropTypes.shape({
    _id: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    color: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
}
