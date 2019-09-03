import { connect } from 'react-redux'

import Products from './component'

const mapStateToProps = state => ({
  products: state.products,
  searchText: state.searchText,
  filters: state.filters,
})

const ProductsContainer = connect(
  mapStateToProps,
)(Products)

export default ProductsContainer
