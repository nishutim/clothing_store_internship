import { connect } from 'react-redux'

import SearchForm from './component'
import { searchProducts } from '@/actions'

const mapStateToProps = state => ({
  searchText: state.searchText,
})

const mapDispatchToProps = dispatch => ({
  searchProducts: searchText => dispatch(searchProducts(searchText)),
})

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default SearchFormContainer
