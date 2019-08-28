import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { DetailsInfoWrapper, Description, DescriptionMask } from './styles'

export default class ProductDetailsInfo extends Component {
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

    return (
      <DetailsInfoWrapper>
        <h2>
          {title}
        </h2>
        <h3>
          {price} $
        </h3>
        <p>
          <span>Rating:</span> {rating}
        </p>
        <p>
          <span>Color:</span> {color.join(', ')}
        </p>
        <p>
          <span>Size:</span> {size.join(', ')}
        </p>
        <Description showMoreInfo={showMoreInfo}>
          <p>
            Description
          </p>
          <div>
            {description}
          </div>
          <DescriptionMask showMoreInfo={showMoreInfo}>
            <button onClick={this.handleShowMoreBtnClick}>
              {showMoreInfo && 'HIDE'}
              {showMoreInfo === false && 'SHOW MORE'}
            </button>
          </DescriptionMask>
        </Description>
      </DetailsInfoWrapper>
    )
  }
}

ProductDetailsInfo.propTypes = {
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
