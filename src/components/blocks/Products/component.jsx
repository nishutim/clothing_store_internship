import React from 'react'

import PropTypes from 'prop-types'

import { sortProducts } from '@/utils/sortProducts'
import { filterProducts } from '@/utils/filterProducts'
import ProductCard from '@/components/blocks/ProductCard/component'
import { ProductsContainer } from './styles'

export default function Products ({
  products,
  filterText,
  currentCategorieTag,
  currentColorTag,
  currentSizeTag,
  currentSortTag,
  onProductClick,
}) {
  return (
    <ProductsContainer>
      {sortProducts(currentSortTag, products)
        .filter(product => filterProducts(
          product,
          filterText,
          currentCategorieTag,
          currentColorTag,
          currentSizeTag,
        ))
        .map(product => (
          <ProductCard
            key={product._id.$oid}
            onProductClick={onProductClick}
            {...product} />
        ))}
    </ProductsContainer>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  currentCategorieTag: PropTypes.string.isRequired,
  currentColorTag: PropTypes.string.isRequired,
  currentSizeTag: PropTypes.string.isRequired,
  currentSortTag: PropTypes.string.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
