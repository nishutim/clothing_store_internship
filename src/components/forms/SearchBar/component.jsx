import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { SearchBarWrapper } from './styles'

export default function SearchForm ({ searchText, searchProducts }) {
  return (
    <SearchBarWrapper>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={useCallback(e => searchProducts(e.target.value), [searchProducts])} />
    </SearchBarWrapper>
  )
}

SearchForm.propTypes = {
  searchProducts: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}
