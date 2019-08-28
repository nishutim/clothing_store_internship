import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { FilterOption } from './styles'

export default class FilterItem extends Component {
  handleFilterTagClick = e => {
    this.props.onFilterTagClick(e.target.value, e.target.name)
  }

  render () {
    const {
      currentFilterTagValue,
      currentFilterTagName,
      tagFilter,
    } = this.props

    return (
      <FilterOption
        currentFilterTagValue={currentFilterTagValue}
        tagFilter={tagFilter}
        name={currentFilterTagName}
        type="button"
        value={tagFilter[0].toUpperCase() + tagFilter.slice(1)}
        onClick={this.handleFilterTagClick} />
    )
  }
}

FilterItem.propTypes = {
  onFilterTagClick: PropTypes.func.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  tagFilter: PropTypes.string.isRequired,
}
