import { connect } from 'react-redux'

import ProductDetails from './component'
import { clickExitButton } from '@/actions'

const mapStateToProps = state => ({
  product: state.currentProduct,
})

const mapDispatchToProps = dispatch => ({
  clickExitButton: () => dispatch(clickExitButton()),
})

const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails)

export default ProductDetailsContainer
