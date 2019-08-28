import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { DetailsInfo } from './styles'

export default class ProductDetsInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMoreInfo: false,
    }
  }

  handleShowMoreBtnClick = () => {
    this.setState(prevState => ({
      showMoreInfo: !prevState.showMoreInfo,
    }))
  }

  render () {
    const { productInfo } = this.props
    const { title, price, rating, color, size, description } = productInfo
    const { showMoreInfo } = this.state

    const descDescriptionStyle = {
      overflow: this.state.showMoreInfo ? 'auto' : 'hidden',
      height: this.state.showMoreInfo ? 'auto' : '100px',
    }

    const descMaskStyle = {
      position: this.state.showMoreInfo ? 'relative' : 'absolute',
      top: this.state.showMoreInfo ? '0' : '100px',
    }

    return (
      <DetailsInfo className="details-info">
        <h2 className="details-info__name">
          {title}
        </h2>
        <p className="details-info__price">
          {price} $
        </p>
        <p className="details-info__rating">
          <span>Rating:</span> {rating}
        </p>
        <p className="details-info__color">
          <span>Color:</span> {color.join(', ')}
        </p>
        <p className="details-info__size">
          <span>Size:</span> {size.join(', ')}
        </p>
        <div className="details-info-desc">
          <p className="details-info-desc__heading">
            Description
          </p>
          <div className="details-info-desc__description" style={descDescriptionStyle}>
            {description}
          </div>
          <div className="details-info-desc-mask" style={descMaskStyle}>
            <button
              className="details-info-desc-mask__btn"
              onClick={this.handleShowMoreBtnClick}
            >
              {showMoreInfo && 'HIDE'}
              {showMoreInfo === false && 'SHOW MORE'}
            </button>
          </div>
        </div>
      </DetailsInfo>
    )
  }
}

ProductDetsInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
}
