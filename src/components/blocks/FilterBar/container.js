import { connect } from 'react-redux'

import FilterBar from './component'

const mapStateToProps = state => ({
  filters: state.filters,
})

const FilterBarContainer = connect(
  mapStateToProps
)(FilterBar)

export default FilterBarContainer
