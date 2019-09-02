import { connect } from 'react-redux'

import Filter from './component'
import { clickFilterName } from '@/actions'

const mapStateToProps = state => ({
  products: state.products,
  showOptions: state.showOptions,
})

const mapDispatchToProps = dispatch => ({
  clickFilterName: () => dispatch(clickFilterName()),
})

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
