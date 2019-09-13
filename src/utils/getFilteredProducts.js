/* eslint-disable prefer-destructuring */
import { compose } from 'redux'

import filterByCategorie from './filterByCategorie'
import filterBySize from './filterBySize'
import filterByColor from './filterByColor'
import sortProducts from './sortProducts'
import filterBySearchQuery from './filterBySearchQuery'

const getFilteredProducts = (products, rules) => compose(
  filterByCategorie,
  filterBySize,
  filterByColor,
  sortProducts,
  filterBySearchQuery
)(products, rules)

export default getFilteredProducts
