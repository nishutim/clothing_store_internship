import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { productShape } from '@/propTypes'
import { getFilters } from '@/utils/getFilters'

import FilterItem from '@/components/blocks/FilterItem'
import { FilterWrapper } from './styles'

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
    const { showOptions } = this.state
    const {
      title,
      filterOptions,
      filterName,
      selectedTagValue,
      products,
    } = this.props

    return (
      <FilterWrapper>
        <button onClick={this.handleFilterNameClick}>
          {title}
        </button>
        {showOptions &&
          <div>
            {getFilters(filterName, products, filterOptions)
              .map(filter => (
                <FilterItem
                  key={filter}
                  filterOption={filter}
                  selectedTagValue={selectedTagValue}
                  filterName={filterName} />
              ))}
          </div>}
      </FilterWrapper>
    )
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filterOptions: PropTypes.string.isRequired,
  selectedTagValue: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(productShape).isRequired,
}
