import React, { Component } from 'react'

import PropTypes from 'prop-types'

import StandardLayout from '@/components/layouts/Standard'
import ProductsContainer from '@/components/blocks/Products'
import FilterBarContainer from '@/components/blocks/FilterBar'

export default class CatalogPage extends Component {
  componentDidMount () {
    this.props.fetchProducts()
  }

  render () {
    return (
      <StandardLayout>
        <FilterBarContainer />
        <ProductsContainer />
      </StandardLayout>
    )
  }
}

CatalogPage.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
}
