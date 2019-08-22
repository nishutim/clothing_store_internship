import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '@/components/blocks/ProductDetsGallery/ProductDetsGallery.css'

export default class ProductDetsGallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMainPic: this.props.urls[0],
    }
    this.handlePicClick = this.handlePicClick.bind(this)
  }

  handlePicClick (url) {
    this.setState({
      currentMainPic: url,
    })
  }

  render () {
    const { urls } = this.props
    const altImgs = urls.map((url, index) => (
      <img
        key={url}
        src={url}
        alt={`pic-${index}`} className="product-dets-gallery-altImgs__item"
        onClick={() => this.handlePicClick(url)} />
    ))
    return (
      <div className="product-dets-gallery">
        <div className="product-dets-gallery-altImgs">
          {altImgs}
        </div>
        <div className="product-dets-gallery-mainImg">
          <img
            src={this.state.currentMainPic}
            alt="main pic" className="product-dets-gallery-mainImg__item" />
        </div>
      </div>
    )
  }
}

ProductDetsGallery.propTypes = {
  urls: PropTypes.array.isRequired,
}
