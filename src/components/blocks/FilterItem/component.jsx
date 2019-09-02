import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { FilterOption } from './styles'

export default function FilterItem (
  {
    currentFilterTagValue,
    currentFilterTagName,
    tagFilter,
    changeFilterTag,
  }

) {
  return (
    <FilterOption
      currentFilterTagValue={currentFilterTagValue}
      name={currentFilterTagName}
      tagFilter={tagFilter}
      type="button"
      value={tagFilter[0].toUpperCase() + tagFilter.slice(1)}
      onClick={useCallback(e =>
        changeFilterTag(e.target.value, e.target.name), [changeFilterTag])} />
  )
}

FilterItem.propTypes = {
  changeFilterTag: PropTypes.func.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  tagFilter: PropTypes.string.isRequired,
}
