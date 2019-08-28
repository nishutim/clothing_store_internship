import React, { Component } from 'react'

import { fetchProducts } from '@/api/fetchProducts'

import Header from '@/components/blocks/Header'
import FilterBar from '@/components/blocks/FilterBar'
import Products from '@/components/blocks/Products'
import ProductDetails from '@/components/blocks/ProductDetails'
import { AppContainer } from './styles'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      currentCategorieTag: 'All',
      currentColorTag: 'All',
      currentSizeTag: 'All',
      currentSortTag: 'Our Picks',
      products: [],
      currentProduct: {},
      showProductDetails: false,
    }
  }

  componentDidMount () {
    fetchProducts('https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json')
      .then(data => this.setState(Object.assign({}, this.state, {
        products: data,
      })))
      .catch(err => console.log('Ooops', err))
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    })
  }

  handleFilterTagChange = (value, currentNameTag) => {
    this.setState({
      [currentNameTag]: value,
    })
  }

  handleProductClick = id => {
    this.setState({
      currentProduct: [...this.state.products].filter(product => id === product._id.$oid)[0],
      showProductDetails: true,
    })
  }

  handleExitBtnClick = () => {
    this.setState({
      showProductDetails: false,
    })
  }

  render () {
    const {
      filterText,
      currentCategorieTag,
      currentColorTag,
      currentSizeTag,
      currentSortTag,
      products,
      currentProduct,
      showProductDetails,
    } = this.state

    return (
      <div className="App">
        <AppContainer>
          <Header
            onFilterTextChange={this.handleFilterTextChange}
            filterText={filterText} />
          {showProductDetails === false &&
            <>
              <FilterBar
                products={products}
                currentCategorieTag={currentCategorieTag}
                currentColorTag={currentColorTag}
                currentSizeTag={currentSizeTag}
                currentSortTag={currentSortTag}
                onFilterTagClick={this.handleFilterTagChange} />
              <Products
                products={products}
                filterText={filterText}
                currentCategorieTag={currentCategorieTag}
                currentColorTag={currentColorTag}
                currentSizeTag={currentSizeTag}
                currentSortTag={currentSortTag}
                onProductClick={this.handleProductClick} />
            </>}
          {showProductDetails && <ProductDetails
            onExitBtnClick={this.handleExitBtnClick}
            product={currentProduct} />}
        </AppContainer>
      </div>
    )
  }
}
