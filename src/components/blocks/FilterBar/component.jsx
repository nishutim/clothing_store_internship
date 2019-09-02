import React from 'react'

import PropTypes from 'prop-types'

import FilterContainer from '@/components/blocks/Filter'
import { FilterBarContainer } from './styles'

export default function FilterBar ({
  currentCategorieTag,
  currentColorTag,
  currentSizeTag,
  currentSortTag,
}) {
  return (
    <FilterBarContainer>
      <FilterContainer
        filterName="Categories"
        filterOptions="tags"
        currentFilterTagValue={currentCategorieTag}
        currentFilterTagName="currentCategorieTag" />
      <FilterContainer
        filterName="Sizes"
        filterOptions="size"
        currentFilterTagValue={currentSizeTag}
        currentFilterTagName="currentSizeTag" />
      <FilterContainer
        filterName="Colors"
        filterOptions="color"
        currentFilterTagValue={currentColorTag}
        currentFilterTagName="currentColorTag" />
      <FilterContainer
        filterName="Sort By"
        filterOptions="sort"
        currentFilterTagValue={currentSortTag}
        currentFilterTagName="currentSortTag" />
    </FilterBarContainer>
  )
}

FilterBar.propTypes = {
  currentCategorieTag: PropTypes.string.isRequired,
  currentColorTag: PropTypes.string.isRequired,
  currentSizeTag: PropTypes.string.isRequired,
  currentSortTag: PropTypes.string.isRequired,
}
