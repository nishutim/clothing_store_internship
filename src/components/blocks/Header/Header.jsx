import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '@/components/forms/SearchForm/SearchBar'
import '@/components/blocks/Header/Header.css'

export default function Header (
  {
    onFilterTextChange,
    filterText,
  }
) {
  return (
    <header className="header">
      <h1 className="header-heading">
          VICTIM
      </h1>
      <SearchBar onFilterTextChange={onFilterTextChange} filterText={filterText} />
    </header>
  )
}

Header.propTypes = {
  onFilterTextChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
}
