import { connect } from 'react-redux'

import SearchBar from './component'
import { searchProducts } from '@/actions'

const mapStateToProps = state => ({
  searchText: state.searchText,
})

const mapDispatchToProps = dispatch => ({
  searchProducts: searchText => dispatch(searchProducts(searchText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
