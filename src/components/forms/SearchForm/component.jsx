import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { SearchBar } from './styles'

export default class SearchForm extends Component {
  render () {
    const { filterText, onFilterTextChange } = this.props

    return (
      <SearchBar
        className="searchbar"
        onSubmit={e => e.preventDefault()}
      >
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={e => onFilterTextChange(e.target.value)} />
      </SearchBar>
    )
  }
}

SearchForm.propTypes = {
  onFilterTextChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
}
