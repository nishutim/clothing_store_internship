import PropTypes from 'prop-types'

export const productShape = PropTypes.shape({
  _id: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  color: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
})
