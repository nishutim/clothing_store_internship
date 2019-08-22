import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilterItem.css'

export default class FilterItem extends Component {
  constructor (props) {
    super(props)
    this.handleFilterTagClick = this.handleFilterTagClick.bind(this)
  }

  handleFilterTagClick (e) {
    this.props.onFilterTagClick(e.target.value, e.target.name)
  }

  render () {
    const {
      currentFilterTagValue,
      currentFilterTagName,
      tagFilter,
      filterName,
    } = this.props
    return (
      <input
        style={{
          color: currentFilterTagValue.toLowerCase() === tagFilter.toLowerCase()
            ? '#d91818' : '#4f4f4f',
        }}
        className="filterbar-somefilter-item"
        name={currentFilterTagName}
        type="button"
        value={
          filterName === 'Colors'
            ? tagFilter[0].toUpperCase() + tagFilter.slice(1) : tagFilter
        }
        onClick={this.handleFilterTagClick} />
    )
  }
}

FilterItem.propTypes = {
  onFilterTagClick: PropTypes.func.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  tagFilter: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
}
