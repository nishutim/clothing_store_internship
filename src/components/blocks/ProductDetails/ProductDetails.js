import React from 'react'
import './ProductDetails.css'
import ProductDetsInfo from '../ProductDetsInfo/ProductDetsInfo'
import ProductDetsGallery from '../ProductDetsGallery/ProductDetsGallery'

export default function ProductDetails ({ handleExitBtnClick, product }) {
  return (
    <div className="product-dets">
      <button
        className="product-dets-exitBtn"
        onClick={handleExitBtnClick}
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
