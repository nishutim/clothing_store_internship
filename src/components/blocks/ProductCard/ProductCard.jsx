import React from 'react'
import './ProductCard.css'

export default function ProductCard ({ _id, title, price, images, onProductClick }) {
  return (
    <div className="products-productcard" onClick={() => onProductClick(_id.$oid)}>
      <img
        className="products-productcard-img" src={images[0]}
        alt="title" />
      <div className="products-productcard-desc">
        <p className="products-productcard-desc__title">{title}</p>
        <p className="products-productcard-desc__price">{price} $</p>
      </div>
    </div>
  )
}
