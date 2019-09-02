import React from 'react'

import PropTypes from 'prop-types'

import { sortProducts } from '@/utils/sortProducts'
import { filterProducts } from '@/utils/filterProducts'

import ProductCardContainer from '@/components/blocks/ProductCard'
import { ProductsWrapper } from './styles'

export default function Products ({
  products,
  searchText,
  currentCategorieTag,
  currentColorTag,
  currentSizeTag,
  currentSortTag,
}) {
  return (
    <ProductsWrapper>
      {sortProducts(currentSortTag, products)
        .filter(product => filterProducts(
          product,
          searchText,
          currentCategorieTag,
          currentColorTag,
          currentSizeTag,
        ))
        .map(product => (
          <ProductCardContainer
            key={product._id.$oid}
            {...product} />
        ))}
    </ProductsWrapper>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      size: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      images: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      color: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
    })
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  currentCategorieTag: PropTypes.string.isRequired,
  currentColorTag: PropTypes.string.isRequired,
  currentSizeTag: PropTypes.string.isRequired,
  currentSortTag: PropTypes.string.isRequired,
}
