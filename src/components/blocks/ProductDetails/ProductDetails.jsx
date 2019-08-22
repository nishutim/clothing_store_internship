import React from 'react'
import PropTypes from 'prop-types'
import './ProductDetails.css'
import ProductDetsInfo from '../ProductDetsInfo/ProductDetsInfo'
import ProductDetsGallery from '../ProductDetsGallery/ProductDetsGallery'

export default function ProductDetails ({ onExitBtnClick, product }) {
  return (
    <div className="product-dets">
      <button
        className="product-dets-exitBtn"
        onClick={onExitBtnClick}
      >
        Back to Shopping
      </button>
      <div className="product-dets-container">
        <ProductDetsGallery urls={product.images} />
        <ProductDetsInfo productInfo={product} />
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  onExitBtnClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
}
