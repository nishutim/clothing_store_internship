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
      currentFilterTagValue,
      currentFilterTagName,
      products,
    } = this.props

    return (
      <FilterWrapper>
        <button onClick={this.handleFilterNameClick}>
          {title}
        </button>
        {showOptions &&
          <div>
            {getFilters(currentFilterTagName, products, filterOptions)
              .map(filter => (
                <FilterItem
                  key={filter}
                  tagFilter={filter}
                  currentFilterTagValue={currentFilterTagValue}
                  currentFilterTagName={currentFilterTagName} />
              ))}
          </div>}
      </FilterWrapper>
    )
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filterOptions: PropTypes.string.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(productShape).isRequired,
}
