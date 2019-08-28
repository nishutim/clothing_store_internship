import React from 'react'

import PropTypes from 'prop-types'

import ProductDetailsInfo from '@/components/blocks/ProductDetailsInfo/component'
import ProductDetailsGallery from '@/components/blocks/ProductDetailsGallery/component'
import { ProductDetailsContainer } from './styles'

export default function ProductDetails ({ onExitBtnClick, product }) {
  return (
    <ProductDetailsContainer className="product-details">
      <button
        className="details-exitBtn"
        onClick={onExitBtnClick}
      >
        BACK TO SHOPPING
      </button>
      <div className="details-container">
        <ProductDetailsGallery productInfo={product} />
        <ProductDetailsInfo productInfo={product} />
      </div>
    </ProductDetailsContainer>
  )
}

ProductDetails.propTypes = {
  onExitBtnClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
}
