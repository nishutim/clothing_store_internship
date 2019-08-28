import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { getFilters } from '@/utils/getFilters'

import FilterItem from '@/components/blocks/FilterItem/component'
import { FilterContainer } from './styles'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showOptions: false,
    }
  }

  handleSomeFilterNameClick = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
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
    const { showOptions } = this.state

    return (
      <FilterContainer>
        <button onClick={this.handleSomeFilterNameClick}>
          {filterName}
        </button>
        {showOptions &&
          <div>
            {getFilters(filterName, products, filterOptions)
              .map(filter => (
                <FilterItem
                  key={filter}
                  tagFilter={filter}
                  filterName={filterName}
                  currentFilterTagValue={currentFilterTagValue}
                  currentFilterTagName={currentFilterTagName}
                  onFilterTagClick={onFilterTagClick} />
              ))}
          </div>}
      </FilterContainer>
    )
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      size: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      images: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      color: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
    })
  ).isRequired,
  filterOptions: PropTypes.string.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  onFilterTagClick: PropTypes.func.isRequired,
}
