import { connect } from 'react-redux'

import ProductDetails from './component'

const mapStateToProps = state => ({
  product: state.selectedProduct,
})

const ProductDetailsContainer = connect(
  mapStateToProps
)(ProductDetails)

export default ProductDetailsContainer
