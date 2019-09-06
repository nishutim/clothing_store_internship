import { connect } from 'react-redux'

import ProductCard from './component'
import { selectProduct } from '@/actions'

const mapDispatchToProps = dispatch => ({
  showProductDetails: id => dispatch(selectProduct(id)),
})

const ProductCardContainer = connect(
  undefined,
  mapDispatchToProps
)(ProductCard)

export default ProductCardContainer
