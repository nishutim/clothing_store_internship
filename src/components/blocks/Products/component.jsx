import React from 'react'

import PropTypes from 'prop-types'

import { sortProducts } from '@/utils/sortProducts'
import { filterProducts } from '@/utils/filterProducts'

import ProductCardContainer from '@/components/blocks/ProductCard'
import { ProductsWrapper } from './styles'

export default function Products ({
  products,
  searchText,
  filters,
}) {
  return (
    <ProductsWrapper>
      {sortProducts(filters[3].currentTag.value, products)
        .filter(product => filterProducts(
          product,
          searchText,
          filters[0].currentTag.value,
          filters[1].currentTag.value,
          filters[2].currentTag.value,
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
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      filterOptions: PropTypes.string.isRequired,
      currentTag: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
}
