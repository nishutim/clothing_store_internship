import React, { Component } from 'react'

import { productShape } from '@/propTypes'

import { DetailsGalleryWrapper, AltImgs, MainImgWrapper } from './styles'

export default class ProductDetailsGallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedPicture:
        props.product !== undefined && props.product.images.length
          ? props.product.images[0]
          : 'Picture is not available',
    }
  }

  handlePicClick = url => {
    this.setState({
      selectedPicture: url,
    })
  }

  render () {
    const { selectedPicture } = this.state
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
          )) : <p>{selectedPicture}</p>}
        </AltImgs>
        <MainImgWrapper>
          {images.length
            ? <img
              src={selectedPicture}
              alt={title} />
            : <p>{selectedPicture}</p>}
        </MainImgWrapper>
      </DetailsGalleryWrapper>
    )
  }
}

ProductDetailsGallery.propTypes = {
  product: productShape,
}
