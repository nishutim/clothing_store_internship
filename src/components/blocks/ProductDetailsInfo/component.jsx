import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { HIDE, SHOW_MORE } from '@/constants'
import { DetailsInfoWrapper, Description, DescriptionMask } from './styles'

export default class ProductDetailsInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetails: false,
    }
  }

  handleShowMoreBtnClick = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
    }))
  }

  render () {
    const { product } = this.props
    const { title, price, rating, color, size, description } = product
    const { showDetails } = this.state

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
        <Description showDetails={showDetails}>
          <p>
            Description
          </p>
          <div>
            {description}
          </div>
          <DescriptionMask showDetails={showDetails}>
            <button onClick={this.handleShowMoreBtnClick}>
              {showDetails && HIDE}
              {showDetails === false && SHOW_MORE}
            </button>
          </DescriptionMask>
        </Description>
      </DetailsInfoWrapper>
    )
  }
}

ProductDetailsInfo.propTypes = {
  product: PropTypes.shape({
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
