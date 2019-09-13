import { connect } from 'react-redux'

import FilterItem from './component'
import { selectFilterTag } from '@/actions'

const mapDispatchToProps = dispatch => ({
  onFilterItemClick: (value, currentNameTag) => dispatch(selectFilterTag(value, currentNameTag)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(FilterItem)
