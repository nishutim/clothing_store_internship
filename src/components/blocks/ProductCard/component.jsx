import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { ProductCardWrapper, ProductCardDescription } from './styles'

export default function ProductCard ({ _id, title, price, images, showProductDetails }) {
  return (
    <ProductCardWrapper>
      <Link
        to="/product" onClick={useCallback(() => {
          showProductDetails(_id.$oid)
        }, [_id.$oid, showProductDetails])}
      >
        <img
          src={images.length ? images[0] : 'Oops, showing some other pic'}
          alt={title} />
        <ProductCardDescription>
          <p>{title}</p>
          <p>{price} &#36;</p>
        </ProductCardDescription>
      </Link>
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
  showProductDetails: PropTypes.func.isRequired,
}
