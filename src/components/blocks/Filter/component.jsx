import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { productShape } from '@/propTypes'
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
    const { showOptions } = this.state
    const {
      title,
      filterOptions,
      currentFilterTagValue,
      currentFilterTagName,
      products,
    } = this.props

    return (
      <FilterContainer>
        <button onClick={this.handleFilterNameClick}>
          {title}
        </button>
        {showOptions &&
          <div>
            {getFilters(currentFilterTagName, products, filterOptions)
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
  title: PropTypes.string.isRequired,
  filterOptions: PropTypes.string.isRequired,
  currentFilterTagValue: PropTypes.string.isRequired,
  currentFilterTagName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(productShape).isRequired,
}
