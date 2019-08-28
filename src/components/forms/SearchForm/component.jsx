import React from 'react'

import PropTypes from 'prop-types'

import { SearchBar } from './styles'

export default function SearchForm ({ filterText, onFilterTextChange }) {
  return (
    <SearchBar onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)} />
    </SearchBar>
  )
}

SearchForm.propTypes = {
  onFilterTextChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
}
