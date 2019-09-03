import React from 'react'

import PropTypes from 'prop-types'

import FilterContainer from '@/components/blocks/Filter'
import { FilterBarWrapper } from './styles'

export default function FilterBar ({ filters }) {
  return (
    <FilterBarWrapper>
      {filters.map(filter => (
        <FilterContainer
          key={filter.title}
          title={filter.title}
          filterOptions={filter.filterOptions}
          currentFilterTagName={filter.currentTag.name}
          currentFilterTagValue={filter.currentTag.value} />
      ))}
    </FilterBarWrapper>
  )
}

FilterBar.propTypes = {
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
