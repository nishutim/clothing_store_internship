import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { FilterOption } from './styles'

export default function FilterItem (
  {
    selectedTagValue,
    filterName,
    filterOption,
    onFilterItemClick,
  }

) {
  return (
    <FilterOption
      selectedTagValue={selectedTagValue}
      filterOption={filterOption}
      type="button"
      name={filterName}
      value={filterOption[0].toUpperCase() + filterOption.slice(1)}
      onClick={useCallback(e =>
        onFilterItemClick(e.target.value, e.target.name), [onFilterItemClick])} />
  )
}

FilterItem.propTypes = {
  onFilterItemClick: PropTypes.func.isRequired,
  selectedTagValue: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  filterOption: PropTypes.string.isRequired,
}
