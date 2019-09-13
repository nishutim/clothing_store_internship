import React from 'react'

import PropTypes from 'prop-types'

import Filter from '@/components/blocks/Filter'
import { FilterBarWrapper } from './styles'

export default function FilterBar ({ filters }) {
  return (
    <FilterBarWrapper>
      {filters.map(filter => (
        <Filter
          key={filter.value}
          title={filter.label}
          filterOptions={filter.filterOptions}
          filterName={filter.value}
          selectedTagValue={filter.selectedTag} />
      ))}
    </FilterBarWrapper>
  )
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      filterOptions: PropTypes.string.isRequired,
      selectedTag: PropTypes.string.isRequired,
    })
  ).isRequired,
}
