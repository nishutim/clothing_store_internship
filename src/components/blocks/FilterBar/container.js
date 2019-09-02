import { connect } from 'react-redux'

import FilterBar from './component'

const mapStateToProps = state => ({
  currentCategorieTag: state.currentCategorieTag,
  currentColorTag: state.currentColorTag,
  currentSizeTag: state.currentSizeTag,
  currentSortTag: state.currentSortTag,
})

const FilterBarContainer = connect(
  mapStateToProps
)(FilterBar)

export default FilterBarContainer
