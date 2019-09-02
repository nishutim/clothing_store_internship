import { connect } from 'react-redux'

import ProductCard from './component'
import { clickProduct } from '@/actions'

const mapDispatchToProps = dispatch => ({
  clickProduct: id => dispatch(clickProduct(id)),
})

const ProductCardContainer = connect(
  null,
  mapDispatchToProps
)(ProductCard)

export default ProductCardContainer
