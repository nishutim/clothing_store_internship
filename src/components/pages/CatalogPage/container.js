import { connect } from 'react-redux'

import CatalogPage from './component'
import { fetchProductsRequest } from '@/actions'

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProductsRequest()),
})

export default connect(
  undefined,
  mapDispatchToProps
)(CatalogPage)
