import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterBarFilter } from '@/components/blocks/Filter/styles'
import FilterItem from '@/components/blocks/FilterItem/FilterItem'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showOptions: false,
    }
    this.handleSomeFilterNameClick = this.handleSomeFilterNameClick.bind(this)
  }

  handleSomeFilterNameClick () {
    this.setState(state => ({
      showOptions: !state.showOptions,
    }))
  }

  render () {
    const {
      filterName,
      products,
      filterOptions,
      currentFilterTagValue,
      currentFilterTagName,
      onFilterTagClick,
    } = this.props

    let filters = null
    if (filterName !== 'Sort By') {
      filters = ['All']
      products.forEach(product => {
        product[filterOptions].forEach(filterOption => {
          if (filters.indexOf(filterOption) !== -1) {
            return
          }
          filters.push(filterOption)
        })
      })
    } else {
      filters = ['Our Picks', 'Price: low to high', 'Price: high to low']
    }

    return (
      <FilterBarFilter className="filterbar-filter">
        <button
          className="filter-name"
          onClick={this.handleSomeFilterNameClick}
        >
          {filterName}
        </button>
        {this.state.showOptions &&
          <div className="filter-options">
            {filters.map(filter => (
              <FilterItem
                key={filter}
                tagFilter={filter}
                filterName={filterName}
                currentFilterTagValue={currentFilterTagValue}
                currentFilterTagName={currentFilterTagName}
                onFilterTagClick={onFilterTagClick} />
            ))}
          </div>}
      </FilterBarFilter>
    )
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  filterOptions: PropTypes.string.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  onFilterTagClick: PropTypes.func.isRequired,
}
