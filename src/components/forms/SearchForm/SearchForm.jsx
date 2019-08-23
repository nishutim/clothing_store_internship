import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from '@/components/forms/SearchForm/styles'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange (e) {
    this.props.onFilterTextChange(e.target.value)
  }

  render () {
    return (
      <SearchBar
        className="searchbar"
        onSubmit={e => e.preventDefault()}
      >
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} />
      </SearchBar>
    )
  }
}

SearchForm.propTypes = {
  onFilterTextChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
}
