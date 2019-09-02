import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Header from '@/components/blocks/Header'
import FilterBarContainer from '@/components/blocks/FilterBar'
import ProductsContainer from '@/components/blocks/Products'
import ProductDetailsContainer from '@/components/blocks/ProductDetails'
import { AppContainer } from './styles'

export default class App extends Component {
  componentDidMount () {
    this.props.fetchProducts()
  }

  render () {
    const { showProductDetails } = this.props

    return (
      <div className="App">
        <AppContainer>
          <Header />
          {showProductDetails === false &&
            <>
              <FilterBarContainer />
              <ProductsContainer />
            </>}
          {showProductDetails && <ProductDetailsContainer />}
        </AppContainer>
      </div>
    )
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  showProductDetails: PropTypes.bool.isRequired,
}
