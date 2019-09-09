import { connect } from 'react-redux'

import Filter from './component'

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(
  mapStateToProps,
)(Filter)
