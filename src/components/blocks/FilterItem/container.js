import { connect } from 'react-redux'

import FilterItem from './component'
import { changeFilterTag } from '@/actions'

const mapDispatchToProps = dispatch => ({
  changeFilterTag: (value, currentNameTag) => dispatch(changeFilterTag(value, currentNameTag)),
})

const FilterItemContainer = connect(
  null,
  mapDispatchToProps
)(FilterItem)

export default FilterItemContainer
