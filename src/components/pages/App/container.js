import { connect } from 'react-redux'

import App from './component'
import { fetchProductsRequest } from '@/actions'

const mapStateToProps = state => ({
  showProductDetails: state.showProductDetails,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProductsRequest()),
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
