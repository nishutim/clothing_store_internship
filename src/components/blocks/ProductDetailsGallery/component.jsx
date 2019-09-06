import React, { Component } from 'react'

import { productShape } from '@/propTypes'

import { DetailsGalleryWrapper, AltImgs, MainImgWrapper } from './styles'

export default class ProductDetailsGallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMainPicture:
        this.props.product.images.length
          ? this.props.product.images[0]
          : 'Oops, showing some other picture',
    }
  }

  handlePicClick = url => {
    this.setState({
      currentMainPicture: url,
    })
  }

  render () {
    const { currentMainPicture } = this.state
    const { product } = this.props
    const { title, images } = product

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
              src={currentMainPicture}
              alt={title} />
            : <p>Oops, something went wrong!</p>}
        </MainImgWrapper>
      </DetailsGalleryWrapper>
    )
  }
}

ProductDetailsGallery.propTypes = {
  product: productShape,
}
