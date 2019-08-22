import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductDetsInfo.css'

export default class ProductDetsInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMoreInfo: false,
    }
    this.handleShowMoreBtnClick = this.handleShowMoreBtnClick.bind(this)
  }

  handleShowMoreBtnClick () {
    this.setState(state => ({
      showMoreInfo: !state.showMoreInfo,
    }))
  }

  render () {
    const { productInfo } = this.props
    const { title, price, rating, color, size, description } = productInfo

    const descDescriptionStyle = {
      overflow: this.state.showMoreInfo ? 'auto' : 'hidden',
      height: this.state.showMoreInfo ? 'auto' : '100px',
    }

    const descMaskStyle = {
      position: this.state.showMoreInfo ? 'relative' : 'absolute',
      top: this.state.showMoreInfo ? '0' : '100px',
    }
    return (
      <div className="product-dets-info">
        <h3 className="product-dets-info__name">
          {title}
        </h3>
        <p className="product-dets-info__price">
          {price} $
        </p>
        <p className="product-dets-info__rating">
          <span>Rating:</span> {rating}
        </p>
        <p className="product-dets-info__color">
          <span>Color:</span> {color.join(', ')}
        </p>
        <p className="product-dets-info__size">
          <span>Size:</span> {size.join(', ')}
        </p>
        <div className="product-dets-info-desc">
          <h4 className="product-dets-info-desc__heading">
            Description
          </h4>
          <p style={descDescriptionStyle} className="product-dets-info-desc__description">
            {description}
          </p>
          <div style={descMaskStyle} className="product-dets-info-desc-mask">
            <button
              className="product-dets-info-desc-mask__btn"
              onClick={this.handleShowMoreBtnClick}
            >
              {this.state.showMoreInfo && 'HIDE'}
              {this.state.showMoreInfo === false && 'SHOW MORE'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ProductDetsInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  color: PropTypes.array.isRequired,
  size: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}
