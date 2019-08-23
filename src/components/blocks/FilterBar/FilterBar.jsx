import React from 'react'
import PropTypes from 'prop-types'
import Filter from '@/components/blocks/Filter/Filter'
import { FilterBarContainer } from '@/components/blocks/FilterBar/styles'

export default function FilterBar ({ onFilterTagClick, products, currentFilterTags }) {
  return (
    <FilterBarContainer className="filterbar">
      <Filter
        filterName="Categories"
        filterOptions="tags"
        products={products}
        currentFilterTagValue={currentFilterTags.currentCategorieTag}
        currentFilterTagName="currentCategorieTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Sizes"
        filterOptions="size"
        products={products}
        currentFilterTagValue={currentFilterTags.currentSizeTag}
        currentFilterTagName="currentSizeTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Colors"
        filterOptions="color"
        products={products}
        currentFilterTagValue={currentFilterTags.currentColorTag}
        currentFilterTagName="currentColorTag"
        onFilterTagClick={onFilterTagClick} />
      <Filter
        filterName="Sort By"
        filterOptions="sort"
        products={products}
        currentFilterTagValue={currentFilterTags.currentSortTag}
        currentFilterTagName="currentSortTag"
        onFilterTagClick={onFilterTagClick} />
    </FilterBarContainer>
  )
}

FilterBar.propTypes = {
  onFilterTagClick: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  currentFilterTags: PropTypes.object.isRequired,
}
