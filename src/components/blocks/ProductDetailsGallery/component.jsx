import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { DetailsGallery } from './styles'

export default class ProductDetsGallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMainPic: this.props.productInfo.images[0],
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
      <DetailsGallery className="details-gallery">
        <div className="gallery-altImgs">
          {images.length ? images.map(url => (
            <img
              className="gallery-altImgs__item"
              key={url}
              src={url}
              alt={title}
              onClick={() => this.handlePicClick(url)} />
          )) : <p>Oops, something went wrong!</p>}
        </div>
        <div className="gallery-mainImg">
          {images.length ? <img
            className="gallery-mainImg__item"
            src={currentMainPic}
            alt="main pic" /> : <p>Oops, something went wrong!</p>}
        </div>
      </DetailsGallery>
    )
  }
}

ProductDetsGallery.propTypes = {
  productInfo: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
}
