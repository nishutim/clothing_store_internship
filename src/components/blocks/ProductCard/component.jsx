import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { ProductCardWrapper, ProductCardDescription } from './styles'

export default function ProductCard ({ _id, title, price, images, clickProduct }) {
  return (
    <ProductCardWrapper
      onClick={useCallback(() => { clickProduct(_id.$oid) }, [_id.$oid, clickProduct])}
    >
      <img
        src={images.length ? images[0] : 'Oops, showing some other pic'}
        alt={title} />
      <ProductCardDescription>
        <p>{title}</p>
        <p>{price} $</p>
      </ProductCardDescription>
    </ProductCardWrapper>
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
  clickProduct: PropTypes.func.isRequired,
}
