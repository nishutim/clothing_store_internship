import { connect } from 'react-redux'

import CatalogPage from './component'
import { fetchProductsRequest } from '@/actions'

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProductsRequest()),
})

const CatalogPageContainer = connect(
  undefined,
  mapDispatchToProps
)(CatalogPage)

export default CatalogPageContainer
