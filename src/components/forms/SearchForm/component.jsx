import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { SearchBar } from './styles'

export default function SearchForm ({ searchText, searchProducts }) {
  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={useCallback(e => searchProducts(e.target.value), [searchProducts])} />
    </SearchBar>
  )
}

SearchForm.propTypes = {
  searchProducts: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}
