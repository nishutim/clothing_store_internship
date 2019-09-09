import React, { Component } from 'react'

import PropTypes from 'prop-types'

import StandardLayout from '@/components/layouts/Standard'
import FilterBar from '@/components/blocks/FilterBar'
import Products from '@/components/blocks/Products'

export default class CatalogPage extends Component {
  componentDidMount () {
    this.props.fetchProducts()
  }

  render () {
    return (
      <StandardLayout>
        <>
          <FilterBar />
          <Products />
        </>
      </StandardLayout>
    )
  }
}

CatalogPage.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
}
