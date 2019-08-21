import React from 'react'
import './ProductCard.css'

export default function ProductCard ({ _id, title, price, images, handleProductClick }) {
  const mainImage = images[0]
  return (
    <div className="products-productcard" onClick={() => handleProductClick(_id.$oid)}>
      <img
        className="products-productcard-img" src={mainImage}
        alt="title" />
      <div className="products-productcard-desc">
        <p className="products-productcard-desc__title">{title}</p>
        <p className="products-productcard-desc__price">{price} $</p>
      </div>
    </div>
  )
}
