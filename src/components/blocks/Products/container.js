import { connect } from 'react-redux'

import Products from './component'

const mapStateToProps = state => ({
  products: state.products,
  searchText: state.searchText,
  currentCategorieTag: state.currentCategorieTag,
  currentColorTag: state.currentColorTag,
  currentSizeTag: state.currentSizeTag,
  currentSortTag: state.currentSortTag,
})

const ProductsContainer = connect(
  mapStateToProps,
)(Products)

export default ProductsContainer
