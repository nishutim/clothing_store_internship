import React from 'react'

import PropTypes from 'prop-types'

import getFilteredProducts from '@/utils/getFilteredProducts'
import { productShape } from '@/propTypes'

import ProductCard from '@/components/blocks/ProductCard'
import { ProductsWrapper } from './styles'

export default function Products ({
  products,
  filters,
  searchText,
}) {
  return (
    <ProductsWrapper>
      {getFilteredProducts(products, [...filters, searchText])
        .map(product => (
          <ProductCard
            key={product.id}
            {...product} />
        ))}
    </ProductsWrapper>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(productShape).isRequired,
  searchText: PropTypes.shape({
    value: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      filterOptions: PropTypes.string.isRequired,
      selectedTag: PropTypes.string.isRequired,
    })
  ).isRequired,
}
