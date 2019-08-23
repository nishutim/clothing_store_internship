import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DetailsGallery } from '@/components/blocks/ProductDetsGallery/styles'

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
        className="gallery-altImgs__item"
        key={url}
        src={url}
        alt={`pic-${index}`}
        onClick={() => this.handlePicClick(url)} />
    ))
    return (
      <DetailsGallery className="details-gallery">
        <div className="gallery-altImgs">
          {altImgs}
        </div>
        <div className="gallery-mainImg">
          <img
            className="gallery-mainImg__item"
            src={this.state.currentMainPic}
            alt="main pic" />
        </div>
      </DetailsGallery>
    )
  }
}

ProductDetsGallery.propTypes = {
  urls: PropTypes.array.isRequired,
}
