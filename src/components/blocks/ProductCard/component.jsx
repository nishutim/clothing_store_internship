import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { ProductCardContainer, ProductCardDescription } from './styles'

export default function ProductCard ({ _id, title, price, images, onProductClick }) {
  return (
    <ProductCardContainer
      onClick={useCallback(
        () => {
          onProductClick(_id.$oid)
        },
        [_id.$oid, onProductClick],
      )}
    >
      <img
        src={images.length ? images[0] : 'Oops, showing some other pic'}
        alt={title} />
      <ProductCardDescription>
        <p>{title}</p>
        <p>{price} $</p>
      </ProductCardDescription>
    </ProductCardContainer>
  )
}

ProductCard.propTypes = {
  _id: PropTypes.shape({
    $oid: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  onProductClick: PropTypes.func.isRequired,
}
