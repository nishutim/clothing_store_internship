import React from 'react'
import PropTypes from 'prop-types'
import { ProductDetailsContainer } from '@/components/blocks/ProductDetails/styles'
import ProductDetsInfo from '@/components/blocks/ProductDetsInfo/ProductDetsInfo'
import ProductDetsGallery from '@/components/blocks/ProductDetsGallery/ProductDetsGallery'

export default function ProductDetails ({ onExitBtnClick, product }) {
  return (
    <ProductDetailsContainer className="product-details">
      <button
        className="details-exitBtn"
        onClick={onExitBtnClick}
      >
        Back to Shopping
      </button>
      <div className="details-container">
        <ProductDetsGallery urls={product.images} />
        <ProductDetsInfo productInfo={product} />
      </div>
    </ProductDetailsContainer>
  )
}

ProductDetails.propTypes = {
  onExitBtnClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
}
