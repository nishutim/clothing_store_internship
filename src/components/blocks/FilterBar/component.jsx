import React from 'react'

import PropTypes from 'prop-types'

import Filter from '@/components/blocks/Filter/component'
import { FilterBarContainer } from './styles'

export default function FilterBar ({
  onFilterTagClick,
  products,
  currentCategorieTag,
  currentColorTag,
  currentSizeTag,
  currentSortTag,
}) {
  return (
    <FilterBarContainer className="filterbar">
      <Filter
        filterName="Categories"
        filterOptions="tags"
        products={products}
        currentFilterTagValue={currentCategorieTag}
        currentFilterTagName="currentCategorieTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Sizes"
        filterOptions="size"
        products={products}
        currentFilterTagValue={currentSizeTag}
        currentFilterTagName="currentSizeTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Colors"
        filterOptions="color"
        products={products}
        currentFilterTagValue={currentColorTag}
        currentFilterTagName="currentColorTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Sort By"
        filterOptions="sort"
        products={products}
        currentFilterTagValue={currentSortTag}
        currentFilterTagName="currentSortTag"
        onFilterTagClick={onFilterTagClick} />
    </FilterBarContainer>
  )
}

FilterBar.propTypes = {
  onFilterTagClick: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  currentCategorieTag: PropTypes.string.isRequired,
  currentColorTag: PropTypes.string.isRequired,
  currentSizeTag: PropTypes.string.isRequired,
  currentSortTag: PropTypes.string.isRequired,
}
