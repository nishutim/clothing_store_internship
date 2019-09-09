import { connect } from 'react-redux'

import ProductCard from './component'
import { selectProduct } from '@/actions'

const mapDispatchToProps = dispatch => ({
  showProductDetails: id => dispatch(selectProduct(id)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(ProductCard)
