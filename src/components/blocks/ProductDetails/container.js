import { connect } from 'react-redux'

import ProductDetails from './component'

const mapStateToProps = state => ({
  product: state.selectedProduct,
})

export default connect(
  mapStateToProps
)(ProductDetails)
