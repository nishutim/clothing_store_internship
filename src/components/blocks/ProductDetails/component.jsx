import React from 'react'

import PropTypes from 'prop-types'

import ProductDetailsInfo from '@/components/blocks/ProductDetailsInfo'
import ProductDetailsGallery from '@/components/blocks/ProductDetailsGallery'
import { ProductDetailsWrapper, ProductDetailsContainer } from './styles'

export default function ProductDetails ({ clickExitButton, product }) {
  return (
    <ProductDetailsWrapper>
      <button onClick={clickExitButton}>
        BACK TO SHOPPING
      </button>
      <ProductDetailsContainer>
        <ProductDetailsGallery productInfo={product} />
        <ProductDetailsInfo productInfo={product} />
      </ProductDetailsContainer>
    </ProductDetailsWrapper>
  )
}

ProductDetails.propTypes = {
  clickExitButton: PropTypes.func.isRequired,
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
