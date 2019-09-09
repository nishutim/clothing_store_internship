import { connect } from 'react-redux'

import FilterBar from './component'

const mapStateToProps = state => ({
  filters: state.filters,
})

export default connect(
  mapStateToProps
)(FilterBar)
