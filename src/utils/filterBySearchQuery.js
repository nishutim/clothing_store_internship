import { SEARCH_QUERY } from '@/constants/filterNames'

const filterBySearchQuery = (products, rules) => {
  // eslint-disable-next-line prefer-destructuring
  const query = rules.filter(rule => rule.value === SEARCH_QUERY)[0].query

  return {
    products: products.filter(product =>
      product.title.toLowerCase().indexOf(query.toLowerCase().trim()) !== -1),
    rules: rules,
  }
}

export default filterBySearchQuery
