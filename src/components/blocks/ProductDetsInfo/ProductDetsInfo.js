import React from 'react'
import './ProductDetsInfo.css'

export default function ProductDetsInfo({ productInfo }) {
  const { title, price, rating, color, size, description } = productInfo;
  return (
    <div className="product-dets-info">
      <h3 className="product-dets-info__name">
        {title}
      </h3>
      <p className="product-dets-info__price">
        {price}$
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
        <p className="product-dets-info-desc__description">
          {description}
        </p>
      </div>
    </div>
  )
}
