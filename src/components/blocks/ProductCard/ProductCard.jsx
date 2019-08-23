import React from 'react'
import PropTypes from 'prop-types'
import { ProductCardContainer } from '@/components/blocks/ProductCard/styles'

export default function ProductCard ({ _id, title, price, images, onProductClick }) {
  return (
    <ProductCardContainer
      className="products-productcard"
      onClick={() => onProductClick(_id.$oid)}
    >
      <img
        className="productcard-img"
        src={images[0]}
        alt="title" />
      <div className="productcard-desc">
        <p className="productcard-desc__title">{title}</p>
        <p className="productcard-desc__price">{price} $</p>
      </div>
    </ProductCardContainer>
  )
}

ProductCard.propTypes = {
  _id: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
