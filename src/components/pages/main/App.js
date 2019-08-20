import React, { Component } from 'react'
import Header from '../../blocks/Header/Header'
import FilterBar from '../../blocks/FilterBar/FilterBar'
import Products from '../../blocks/Products/Products'
import ProductDetails from '../../blocks/ProductDetails/ProductDetails'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      currentCategorieTag: 'All',
      currentColorTag: 'All',
      currentSizeTag: 'All',
      currentSortTag: 'Our Picks',
      products: [],
      currentProduct: {},
      showCurrentProductDets: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTagChange = this.handleFilterTagChange.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleExitBtnClick = this.handleExitBtnClick.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      ...this.state,
      filterText: filterText
    });
  }

  handleFilterTagChange(value, currentNameTag) {
    this.setState({
      ...this.state,
      [currentNameTag]: value
    })
  }

  handleProductClick(id) {
    this.setState({
      ...this.state,
      currentProduct: [...this.state.products].filter(product => id === product._id.$oid)[0],
      showCurrentProductDets: true
    })
  }

  handleExitBtnClick(){
    this.setState({
      showCurrentProductDets: false
    })
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json')
      .then(response => response.json())
      .then(data => this.setState(Object.assign({}, this.state, {
        products: data
      })))
  }
 
  render() {
    if (this.state.showCurrentProductDets) {
      return (
        <div className="App">
          <div 
            className="container" 
            style={{margin: '0px auto', width: '80%'}}
          > 
            <Header 
              onFilterTextChange={this.handleFilterTextChange}  filterText={this.state.filterText} 
            />
          
            <ProductDetails 
              handleExitBtnClick={this.handleExitBtnClick} 
              product={this.state.currentProduct}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="App">
        <div 
          className="container" 
          style={{margin: '0px auto', width: '80%'}}
        > 
          <Header 
            onFilterTextChange={this.handleFilterTextChange} filterText={this.state.filterText} 
          />

          <FilterBar 
            products={this.state.products} 
            currentFilterTag={this.state} 
            onFilterTagClick={this.handleFilterTagChange} 

          />

          <Products 
            products={this.state.products} 
            filterText={this.state.filterText} 
            currentFilterTags={this.state}
            handleProductClick={this.handleProductClick} 
          />
          
        </div>
      </div>
    )
  }
}

