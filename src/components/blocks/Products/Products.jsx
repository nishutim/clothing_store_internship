import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'

export default function Products ({
  products,
  filterText,
  currentFilterTags,
  onProductClick,
}) {
  const items = []
  const {
    currentCategorieTag,
    currentSizeTag,
    currentColorTag,
    currentSortTag,
  } = currentFilterTags

  let sortedProducts = null
  if (currentSortTag === 'Our Picks') sortedProducts = [...products]
  if (currentSortTag === 'Price: low to high') {
    sortedProducts = [...products].sort((a, b) => a.price - b.price)
  }
  if (currentSortTag === 'Price: high to low') {
    sortedProducts = [...products].sort((a, b) => b.price - a.price)
  }

  sortedProducts.forEach(product => {
    if (
      product.tags.indexOf(currentCategorieTag) === -1 &&
      currentCategorieTag !== 'All'
    ) {
      return
    }
    if (
      product.size.indexOf(currentSizeTag) === -1 &&
      currentSizeTag !== 'All'
    ) {
      return
    }
    if (
      product.color.indexOf(currentColorTag.toLowerCase()) === -1 &&
      currentColorTag !== 'All'
    ) {
      return
    }
    if (
      product.title.toLowerCase().indexOf(filterText.toLowerCase().trim()) ===
      -1
    ) {
      return
    }
    items.push(
      <ProductCard
        key={product._id.$oid}
        onProductClick={onProductClick}
        {...product} />
    )
  })

  return <div className="products">{items}</div>
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  currentFilterTags: PropTypes.object.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
