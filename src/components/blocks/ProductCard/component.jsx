import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { ProductCardWrapper, ProductCardDescription, ErrorCaseBlock } from './styles'

export default function ProductCard ({ id, title, price, images, showProductDetails }) {
  return (
    <ProductCardWrapper>
      <Link
        to="/product" onClick={useCallback(() => {
          showProductDetails(id)
        }, [id, showProductDetails])}
      >
        {images.length
          ? <img
            src={images[0]}
            alt={title} />
          : <ErrorCaseBlock><h2>404</h2><p>Sorry, picture not found</p></ErrorCaseBlock>}
        <ProductCardDescription>
          <p>{title}</p>
          <p>{price} &#36;</p>
        </ProductCardDescription>
      </Link>
    </ProductCardWrapper>

  )
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  showProductDetails: PropTypes.func.isRequired,
}
