import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { getFilters } from '@/utils/getFilters'

import FilterItemContainer from '@/components/blocks/FilterItem'
import { FilterContainer } from './styles'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showOptions: false,
    }
  }

  handleFilterNameClick = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
    }))
  }

  render () {
    const {
      filterName,
      filterOptions,
      currentFilterTagValue,
      currentFilterTagName,
      products,
    } = this.props
    const { showOptions } = this.state

    return (
      <FilterContainer>
        <button onClick={this.handleFilterNameClick}>
          {filterName}
        </button>
        {showOptions &&
          <div>
            {getFilters(filterName, products, filterOptions)
              .map(filter => (
                <FilterItemContainer
                  key={filter}
                  tagFilter={filter}
                  currentFilterTagValue={currentFilterTagValue}
                  currentFilterTagName={currentFilterTagName} />
              ))}
          </div>}
      </FilterContainer>
    )
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterOptions: PropTypes.string.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
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
}