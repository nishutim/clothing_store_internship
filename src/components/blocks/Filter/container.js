import { connect } from 'react-redux'

import Filter from './component'

const mapStateToProps = state => ({
  products: state.products,
})

const FilterContainer = connect(
  mapStateToProps,
)(Filter)

export default FilterContainer
